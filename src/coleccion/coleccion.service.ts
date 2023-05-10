import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColeccionEntity } from './coleccion.entity/coleccion.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class ColeccionService {

    constructor(
        @InjectRepository(ColeccionEntity)
        private readonly coleccionRepository: Repository<ColeccionEntity>
    ){}

    async findAll(): Promise<ColeccionEntity[]> {
        return await this.coleccionRepository.find({ relations: ["imagen", "productos"] });
    }

    async findOne(id: string): Promise<ColeccionEntity> {
        const coleccion: ColeccionEntity = await this.coleccionRepository.findOne({where: {id}, relations: ["imagen", "productos"] } );
        if (!coleccion)
          throw new BusinessLogicException("The coleccion with the given id was not found", BusinessError.NOT_FOUND);
        return coleccion;
    }

    async create(coleccion: ColeccionEntity): Promise<ColeccionEntity> {
        return await this.coleccionRepository.save(coleccion);
    }

    async update(id: string, coleccion: ColeccionEntity): Promise<ColeccionEntity> {
        const persistedColeccion: ColeccionEntity = await this.coleccionRepository.findOne({where:{id}});
        if (!persistedColeccion)
          throw new BusinessLogicException("The coleccion with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.coleccionRepository.save({...persistedColeccion, ...coleccion});
    }

    async delete(id: string) {
        const coleccion: ColeccionEntity = await this.coleccionRepository.findOne({where:{id}});
        if (!coleccion)
          throw new BusinessLogicException("The coleccion with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.coleccionRepository.remove(coleccion);
    }

}
