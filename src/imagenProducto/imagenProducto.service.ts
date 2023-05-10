import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImagenProductoEntity } from './imagenProducto.entity/imagenProducto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class ImagenProductoService {

    constructor(
        @InjectRepository(ImagenProductoEntity)
        private readonly imagenProductoRepository: Repository<ImagenProductoEntity>
    ){}

    async findAll(): Promise<ImagenProductoEntity[]> {
        return await this.imagenProductoRepository.find({ relations: ["producto"] });
    }

    async findOne(id: string): Promise<ImagenProductoEntity> {
        const imagenProducto: ImagenProductoEntity = await this.imagenProductoRepository.findOne({where: {id}, relations: ["producto"] } );
        if (!imagenProducto)
          throw new BusinessLogicException("The imagenProducto with the given id was not found", BusinessError.NOT_FOUND);
        return imagenProducto;
    }

    async create(imagenProducto: ImagenProductoEntity): Promise<ImagenProductoEntity> {
        return await this.imagenProductoRepository.save(imagenProducto);
    }

    async update(id: string, imagenProducto: ImagenProductoEntity): Promise<ImagenProductoEntity> {
        const persistedImagenProducto: ImagenProductoEntity = await this.imagenProductoRepository.findOne({where:{id}});
        if (!persistedImagenProducto)
          throw new BusinessLogicException("The imagenProducto with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.imagenProductoRepository.save({...persistedImagenProducto, ...imagenProducto});
    }

    async delete(id: string) {
        const imagenProducto: ImagenProductoEntity = await this.imagenProductoRepository.findOne({where:{id}});
        if (!imagenProducto)
          throw new BusinessLogicException("The imagenProducto with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.imagenProductoRepository.remove(imagenProducto);
    }

}
