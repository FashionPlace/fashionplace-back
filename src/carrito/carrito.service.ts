import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoEntity } from './carrito.entity/carrito.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class CarritoService {

    constructor(
        @InjectRepository(CarritoEntity)
        private readonly carritoRepository: Repository<CarritoEntity>
    ){}

    async findAll(): Promise<CarritoEntity[]> {
        return await this.carritoRepository.find({ relations: ["carritoProductos","comprador"] });
    }

    async findOne(id: string): Promise<CarritoEntity> {
        const carrito: CarritoEntity = await this.carritoRepository.findOne({where: {id}, relations: ["carritoProductos","comprador"] } );
        if (!carrito)
          throw new BusinessLogicException("The carrito with the given id was not found", BusinessError.NOT_FOUND);
        return carrito;
    }

    async create(carrito: CarritoEntity): Promise<CarritoEntity> {
        return await this.carritoRepository.save(carrito);
    }

    async update(id: string, carrito: CarritoEntity): Promise<CarritoEntity> {
        const persistedCarrito: CarritoEntity = await this.carritoRepository.findOne({where:{id}});
        if (!persistedCarrito)
          throw new BusinessLogicException("The carrito with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.carritoRepository.save({...persistedCarrito, ...carrito});
    }

    async delete(id: string) {
        const carrito: CarritoEntity = await this.carritoRepository.findOne({where:{id}});
        if (!carrito)
          throw new BusinessLogicException("The carrito with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.carritoRepository.remove(carrito);
    }

}
