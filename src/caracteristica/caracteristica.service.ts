import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CaracteristicaEntity } from './caracteristica.entity/caracteristica.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class CaracteristicaService {

    constructor(
        @InjectRepository(CaracteristicaEntity)
        private readonly caracteristicaRepository: Repository<CaracteristicaEntity>
    ){}

    async findAll(): Promise<CaracteristicaEntity[]> {
        return await this.caracteristicaRepository.find({ relations: ["tags", "productos"] });
    }

    async findOne(id: string): Promise<CaracteristicaEntity> {
        const caracteristica: CaracteristicaEntity = await this.caracteristicaRepository.findOne({where: {id}, relations: ["tags", "productos"] } );
        if (!caracteristica)
          throw new BusinessLogicException("The caracteristica with the given id was not found", BusinessError.NOT_FOUND);
        return caracteristica;
    }

    async create(caracteristica: CaracteristicaEntity): Promise<CaracteristicaEntity> {
        return await this.caracteristicaRepository.save(caracteristica);
    }

    async update(id: string, caracteristica: CaracteristicaEntity): Promise<CaracteristicaEntity> {
        const persistedCaracteristica: CaracteristicaEntity = await this.caracteristicaRepository.findOne({where:{id}});
        if (!persistedCaracteristica)
          throw new BusinessLogicException("The caracteristica with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.caracteristicaRepository.save({...persistedCaracteristica, ...caracteristica});
    }

    async delete(id: string) {
        const caracteristica: CaracteristicaEntity = await this.caracteristicaRepository.findOne({where:{id}});
        if (!caracteristica)
          throw new BusinessLogicException("The caracteristica with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.caracteristicaRepository.remove(caracteristica);
    }

}
