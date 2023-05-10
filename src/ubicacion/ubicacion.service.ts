import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UbicacionEntity } from './ubicacion.entity/ubicacion.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class UbicacionService {

    constructor(
        @InjectRepository(UbicacionEntity)
        private readonly ubicacionRepository: Repository<UbicacionEntity>
    ){}

    async findAll(): Promise<UbicacionEntity[]> {
        return await this.ubicacionRepository.find();
    }

    async findOne(id: string): Promise<UbicacionEntity> {
        const ubicacion: UbicacionEntity = await this.ubicacionRepository.findOne({where: {id}} );
        if (!ubicacion)
          throw new BusinessLogicException("The ubicacion with the given id was not found", BusinessError.NOT_FOUND);
        return ubicacion;
    }

    async create(ubicacion: UbicacionEntity): Promise<UbicacionEntity> {
        return await this.ubicacionRepository.save(ubicacion);
    }

    async update(id: string, ubicacion: UbicacionEntity): Promise<UbicacionEntity> {
        const persistedUbicacion: UbicacionEntity = await this.ubicacionRepository.findOne({where:{id}});
        if (!persistedUbicacion)
          throw new BusinessLogicException("The ubicacion with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.ubicacionRepository.save({...persistedUbicacion, ...ubicacion});
    }

    async delete(id: string) {
        const ubicacion: UbicacionEntity = await this.ubicacionRepository.findOne({where:{id}});
        if (!ubicacion)
          throw new BusinessLogicException("The ubicacion with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.ubicacionRepository.remove(ubicacion);
    }

}
