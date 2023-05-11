import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompradorEntity } from './comprador.entity/comprador.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { CarritoEntity } from 'src/carrito/carrito.entity/carrito.entity';

@Injectable()
export class CompradorService {

    constructor(
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>,
        @InjectRepository(CarritoEntity)
        private readonly carritoRepository: Repository<CarritoEntity>
    ){}

    async findAll(): Promise<CompradorEntity[]> {
        return await this.compradorRepository.find({ relations: ["imagen", "direccion", "compras", "carrito", "visitas", "comentarios"] });
    }

    async findOne(id: string): Promise<CompradorEntity> {
        const comprador: CompradorEntity = await this.compradorRepository.findOne({where: {id}, relations: ["imagen", "direccion", "compras", "carrito", "visitas", "comentarios"] } );
        if (!comprador)
          throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);
        return comprador;
    }

    async create(comprador: CompradorEntity): Promise<CompradorEntity> {
        const carrito = new CarritoEntity();
        carrito.fecha = new Date();
        const savedCarrito: CarritoEntity = await this.carritoRepository.save(carrito);
        comprador.carrito = savedCarrito;
        return await this.compradorRepository.save(comprador);
    }

    async update(id: string, comprador: CompradorEntity): Promise<CompradorEntity> {
        const persistedComprador: CompradorEntity = await this.compradorRepository.findOne({where:{id}});
        if (!persistedComprador)
          throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.compradorRepository.save({...persistedComprador, ...comprador});
    }

    async delete(id: string) {
        const comprador: CompradorEntity = await this.compradorRepository.findOne({where:{id}});
        if (!comprador)
          throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.compradorRepository.remove(comprador);
    }

}
