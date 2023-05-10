import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompraProductoEntity } from './compraProducto.entity/compraProducto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class CompraProductoService {

    constructor(
        @InjectRepository(CompraProductoEntity)
        private readonly compraProductoRepository: Repository<CompraProductoEntity>
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
        return await this.compraProductoRepository.save(compraProducto);
    }

    async update(id: string, compraProducto: CompraProductoEntity): Promise<CompraProductoEntity> {
        const persistedCompraProducto: CompraProductoEntity = await this.compraProductoRepository.findOne({where:{id}});
        if (!persistedCompraProducto)
          throw new BusinessLogicException("The compraProducto with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.compraProductoRepository.save({...persistedCompraProducto, ...compraProducto});
    }

    async delete(id: string) {
        const compraProducto: CompraProductoEntity = await this.compraProductoRepository.findOne({where:{id}});
        if (!compraProducto)
          throw new BusinessLogicException("The compraProducto with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.compraProductoRepository.remove(compraProducto);
    }

}
