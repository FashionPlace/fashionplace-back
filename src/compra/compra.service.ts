import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompraEntity } from './compra.entity/compra.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class CompraService {

    constructor(
        @InjectRepository(CompraEntity)
        private readonly compraRepository: Repository<CompraEntity>
    ){}

    async findAll(): Promise<CompraEntity[]> {
        return await this.compraRepository.find({ relations: ["comprador", "compraProductos"] });
    }

    async findOne(id: string): Promise<CompraEntity> {
        const compra: CompraEntity = await this.compraRepository.findOne({where: {id}, relations: ["comprador", "compraProductos"] } );
        if (!compra)
          throw new BusinessLogicException("The compra with the given id was not found", BusinessError.NOT_FOUND);
        return compra;
    }

    async create(compra: CompraEntity): Promise<CompraEntity> {
        return await this.compraRepository.save(compra);
    }

    async update(id: string, compra: CompraEntity): Promise<CompraEntity> {
        const persistedCompra: CompraEntity = await this.compraRepository.findOne({where:{id}});
        if (!persistedCompra)
          throw new BusinessLogicException("The compra with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.compraRepository.save({...persistedCompra, ...compra});
    }

    async delete(id: string) {
        const compra: CompraEntity = await this.compraRepository.findOne({where:{id}});
        if (!compra)
          throw new BusinessLogicException("The compra with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.compraRepository.remove(compra);
    }

}
