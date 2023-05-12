import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitaEntity } from './visita.entity/visita.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';

@Injectable()
export class VisitaService {

    constructor(
        @InjectRepository(VisitaEntity)
        private readonly visitaRepository: Repository<VisitaEntity>,
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>,
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>
    ){}

    async findAll(): Promise<VisitaEntity[]> {
        return await this.visitaRepository.find({ relations: ["comprador", "producto"] });
    }

    async findOne(id: string): Promise<VisitaEntity> {
        const visita: VisitaEntity = await this.visitaRepository.findOne({where: {id}, relations: ["comprador", "producto"] } );
        if (!visita)
          throw new BusinessLogicException("The visita with the given id was not found", BusinessError.NOT_FOUND);
        return visita;
    }

    async create(visita: VisitaEntity): Promise<VisitaEntity> {
        const producto: ProductoEntity = await this.productoRepository.findOne({where: {id: visita.producto.id}} );
        if (!producto)
            throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);
        
        const comprador: CompradorEntity = await this.compradorRepository.findOne({where: {id: visita.comprador.id} } );
        if (!comprador)
            throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);

        return await this.visitaRepository.save(visita);
    }

    async update(id: string, visita: VisitaEntity): Promise<VisitaEntity> {
        const persistedVisita: VisitaEntity = await this.visitaRepository.findOne({where:{id}});
        if (!persistedVisita)
          throw new BusinessLogicException("The visita with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.visitaRepository.save({...persistedVisita, ...visita});
    }

    async delete(id: string) {
        const visita: VisitaEntity = await this.visitaRepository.findOne({where:{id}});
        if (!visita)
          throw new BusinessLogicException("The visita with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.visitaRepository.remove(visita);
    }

}
