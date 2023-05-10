import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitaEntity } from './visita.entity/visita.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class VisitaService {

    constructor(
        @InjectRepository(VisitaEntity)
        private readonly visitaRepository: Repository<VisitaEntity>
    ){}

    async findAll(): Promise<VisitaEntity[]> {
        return await this.visitaRepository.find({ relations: ["tags", "productos"] });
    }

    async findOne(id: string): Promise<VisitaEntity> {
        const visita: VisitaEntity = await this.visitaRepository.findOne({where: {id}, relations: ["tags", "productos"] } );
        if (!visita)
          throw new BusinessLogicException("The visita with the given id was not found", BusinessError.NOT_FOUND);
        return visita;
    }

    async create(visita: VisitaEntity): Promise<VisitaEntity> {
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
