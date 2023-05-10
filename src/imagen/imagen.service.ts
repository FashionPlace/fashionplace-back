import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImagenEntity } from './imagen.entity/imagen.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class ImagenService {

    constructor(
        @InjectRepository(ImagenEntity)
        private readonly imagenRepository: Repository<ImagenEntity>
    ){}

    async findAll(): Promise<ImagenEntity[]> {
        return await this.imagenRepository.find();
    }

    async findOne(id: string): Promise<ImagenEntity> {
        const imagen: ImagenEntity = await this.imagenRepository.findOne({where: {id}} );
        if (!imagen)
          throw new BusinessLogicException("The imagen with the given id was not found", BusinessError.NOT_FOUND);
        return imagen;
    }

    async create(imagen: ImagenEntity): Promise<ImagenEntity> {
        return await this.imagenRepository.save(imagen);
    }

    async update(id: string, imagen: ImagenEntity): Promise<ImagenEntity> {
        const persistedImagen: ImagenEntity = await this.imagenRepository.findOne({where:{id}});
        if (!persistedImagen)
          throw new BusinessLogicException("The imagen with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.imagenRepository.save({...persistedImagen, ...imagen});
    }

    async delete(id: string) {
        const imagen: ImagenEntity = await this.imagenRepository.findOne({where:{id}});
        if (!imagen)
          throw new BusinessLogicException("The imagen with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.imagenRepository.remove(imagen);
    }

}
