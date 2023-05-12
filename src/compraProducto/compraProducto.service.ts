/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompraProductoEntity } from './compraProducto.entity/compraProducto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';
import { CompraEntity } from 'src/compra/compra.entity/compra.entity';

@Injectable()
export class CompraProductoService {

    constructor(
        @InjectRepository(CompraProductoEntity)
        private readonly compraProductoRepository: Repository<CompraProductoEntity>,

        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>,

        @InjectRepository(CompraEntity)
        private readonly compraRepository: Repository<CompraEntity>
    ){}

    async findAll(): Promise<CompraProductoEntity[]> {
        return await this.compraProductoRepository.find({ relations: ["producto", "compra"] });
    }

    async findOne(id: string): Promise<CompraProductoEntity> {
        const compraProducto: CompraProductoEntity = await this.compraProductoRepository.findOne({where: {id}, relations: ["producto", "compra"] } );
        if (!compraProducto)
          throw new BusinessLogicException("The compraProducto with the given id was not found", BusinessError.NOT_FOUND);
        return compraProducto;
    }

    async create(compraProducto: CompraProductoEntity): Promise<CompraProductoEntity> {

        const producto: ProductoEntity = await this.productoRepository.findOne({where: {id: compraProducto.producto.id} } );
        if (!producto)
            throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);
        
        const compra: CompraEntity = await this.compraRepository.findOne({where: {id: compraProducto.compra.id} } );
        if (!compra)
            throw new BusinessLogicException("The compra with the given id was not found", BusinessError.NOT_FOUND);

        return await this.compraProductoRepository.save(compraProducto);
    }

    async update(id: string, compraProducto: CompraProductoEntity): Promise<CompraProductoEntity> {
        const persistedCompraProducto: CompraProductoEntity = await this.compraProductoRepository.findOne({where:{id}});
        if (!persistedCompraProducto)
          throw new BusinessLogicException("The compraProducto with the given id was not found", BusinessError.NOT_FOUND);

        const producto: ProductoEntity = await this.productoRepository.findOne({where: {id: compraProducto.producto.id} } );
        if (!producto)
          throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);
          
        const compra: CompraEntity = await this.compraRepository.findOne({where: {id: compraProducto.compra.id} } );
        if (!compra)
          throw new BusinessLogicException("The compra with the given id was not found", BusinessError.NOT_FOUND);

        return await this.compraProductoRepository.save({...persistedCompraProducto, ...compraProducto});
    }

    async delete(id: string) {
        const compraProducto: CompraProductoEntity = await this.compraProductoRepository.findOne({where:{id}});
        if (!compraProducto)
          throw new BusinessLogicException("The compraProducto with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.compraProductoRepository.remove(compraProducto);
    }

}
