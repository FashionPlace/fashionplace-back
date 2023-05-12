import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoProductoEntity } from './carritoProducto.entity/carritoProducto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';
import { CarritoEntity } from 'src/carrito/carrito.entity/carrito.entity';

@Injectable()
export class CarritoProductoService {

    constructor(
        @InjectRepository(CarritoProductoEntity)
        private readonly carritoProductoRepository: Repository<CarritoProductoEntity>,
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>,
        @InjectRepository(CarritoEntity)
        private readonly carritoRepository: Repository<CarritoEntity>
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
        const producto: ProductoEntity = await this.productoRepository.findOne({where: {id: carritoProducto.producto.id}} );
        if (!producto)
            throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);
        
        const carrito: CarritoEntity = await this.carritoRepository.findOne({where: {id: carritoProducto.carrito.id} } );
        if (!carrito)
            throw new BusinessLogicException("The carrito with the given id was not found", BusinessError.NOT_FOUND);

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
