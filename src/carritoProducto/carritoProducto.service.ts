import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoProductoEntity } from './carritoProducto.entity/carritoProducto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class CarritoProductoService {

    constructor(
        @InjectRepository(CarritoProductoEntity)
        private readonly carritoProductoRepository: Repository<CarritoProductoEntity>
    ){}

    async findAll(): Promise<CarritoProductoEntity[]> {
        return await this.carritoProductoRepository.find({ relations: ["carrito", "producto"] });
    }

    async findOne(id: string): Promise<CarritoProductoEntity> {
        const carritoProducto: CarritoProductoEntity = await this.carritoProductoRepository.findOne({where: {id}, relations: ["carrito", "producto"] } );
        if (!carritoProducto)
          throw new BusinessLogicException("The carritoProducto with the given id was not found", BusinessError.NOT_FOUND);
        return carritoProducto;
    }

    async create(carritoProducto: CarritoProductoEntity): Promise<CarritoProductoEntity> {
        return await this.carritoProductoRepository.save(carritoProducto);
    }

    async update(id: string, carritoProducto: CarritoProductoEntity): Promise<CarritoProductoEntity> {
        const persistedCarritoProducto: CarritoProductoEntity = await this.carritoProductoRepository.findOne({where:{id}});
        if (!persistedCarritoProducto)
          throw new BusinessLogicException("The carritoProducto with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.carritoProductoRepository.save({...persistedCarritoProducto, ...carritoProducto});
    }

    async delete(id: string) {
        const carritoProducto: CarritoProductoEntity = await this.carritoProductoRepository.findOne({where:{id}});
        if (!carritoProducto)
          throw new BusinessLogicException("The carritoProducto with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.carritoProductoRepository.remove(carritoProducto);
    }

}
