import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraficaEntity } from './grafica.entity/grafica.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class GraficaService {

    constructor(
        @InjectRepository(GraficaEntity)
        private readonly graficaRepository: Repository<GraficaEntity>
    ){}

    async findAll(): Promise<GraficaEntity[]> {
        return await this.graficaRepository.find({ relations: ["empresa"] });
    }

    async findOne(id: string): Promise<GraficaEntity> {
        const grafica: GraficaEntity = await this.graficaRepository.findOne({where: {id}, relations: ["empresa"] } );
        if (!grafica)
          throw new BusinessLogicException("The grafica with the given id was not found", BusinessError.NOT_FOUND);
        return grafica;
    }

    async create(grafica: GraficaEntity): Promise<GraficaEntity> {
        return await this.graficaRepository.save(grafica);
    }

    async update(id: string, grafica: GraficaEntity): Promise<GraficaEntity> {
        const persistedGrafica: GraficaEntity = await this.graficaRepository.findOne({where:{id}});
        if (!persistedGrafica)
          throw new BusinessLogicException("The grafica with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.graficaRepository.save({...persistedGrafica, ...grafica});
    }

    async delete(id: string) {
        const grafica: GraficaEntity = await this.graficaRepository.findOne({where:{id}});
        if (!grafica)
          throw new BusinessLogicException("The grafica with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.graficaRepository.remove(grafica);
    }

}
