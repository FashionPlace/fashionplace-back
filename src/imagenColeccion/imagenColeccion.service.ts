import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImagenColeccionEntity } from './imagenColeccion.entity/imagenColeccion.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class ImagenColeccionService {

    constructor(
        @InjectRepository(ImagenColeccionEntity)
        private readonly imagenColeccionRepository: Repository<ImagenColeccionEntity>
    ){}

    async findAll(): Promise<ImagenColeccionEntity[]> {
        return await this.imagenColeccionRepository.find({ relations: ["coleccion"] });
    }

    async findOne(id: string): Promise<ImagenColeccionEntity> {
        const imagenColeccion: ImagenColeccionEntity = await this.imagenColeccionRepository.findOne({where: {id}, relations: ["coleccion"] } );
        if (!imagenColeccion)
          throw new BusinessLogicException("The imagenColeccion with the given id was not found", BusinessError.NOT_FOUND);
        return imagenColeccion;
    }

    async create(imagenColeccion: ImagenColeccionEntity): Promise<ImagenColeccionEntity> {
        return await this.imagenColeccionRepository.save(imagenColeccion);
    }

    async update(id: string, imagenColeccion: ImagenColeccionEntity): Promise<ImagenColeccionEntity> {
        const persistedImagenColeccion: ImagenColeccionEntity = await this.imagenColeccionRepository.findOne({where:{id}});
        if (!persistedImagenColeccion)
          throw new BusinessLogicException("The imagenColeccion with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.imagenColeccionRepository.save({...persistedImagenColeccion, ...imagenColeccion});
    }

    async delete(id: string) {
        const imagenColeccion: ImagenColeccionEntity = await this.imagenColeccionRepository.findOne({where:{id}});
        if (!imagenColeccion)
          throw new BusinessLogicException("The imagenColeccion with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.imagenColeccionRepository.remove(imagenColeccion);
    }

}
