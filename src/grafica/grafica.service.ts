import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraficaEntity } from './grafica.entity/grafica.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';

@Injectable()
export class GraficaService {

    constructor(
        @InjectRepository(GraficaEntity)
        private readonly graficaRepository: Repository<GraficaEntity>,
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>
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

        const empresa: EmpresaEntity = await this.empresaRepository.findOne({where: {id: grafica.empresa.id}});
        if(!empresa)
            throw new BusinessLogicException("La empresa vinculada a la sucursal debe existir", BusinessError.PRECONDITION_FAILED);

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
