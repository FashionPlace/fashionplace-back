import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImagenUsuarioEntity } from './imagenUsuario.entity/imagenUsuario.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class ImagenUsuarioService {

    constructor(
        @InjectRepository(ImagenUsuarioEntity)
        private readonly imagenUsuarioRepository: Repository<ImagenUsuarioEntity>
    ){}

    async findAll(): Promise<ImagenUsuarioEntity[]> {
        return await this.imagenUsuarioRepository.find({ relations: ["usuario"] });
    }

    async findOne(id: string): Promise<ImagenUsuarioEntity> {
        const imagenUsuario: ImagenUsuarioEntity = await this.imagenUsuarioRepository.findOne({where: {id}, relations: ["usuario"] } );
        if (!imagenUsuario)
          throw new BusinessLogicException("The imagenUsuario with the given id was not found", BusinessError.NOT_FOUND);
        return imagenUsuario;
    }

    async create(imagenUsuario: ImagenUsuarioEntity): Promise<ImagenUsuarioEntity> {
        return await this.imagenUsuarioRepository.save(imagenUsuario);
    }

    async update(id: string, imagenUsuario: ImagenUsuarioEntity): Promise<ImagenUsuarioEntity> {
        const persistedImagenUsuario: ImagenUsuarioEntity = await this.imagenUsuarioRepository.findOne({where:{id}});
        if (!persistedImagenUsuario)
          throw new BusinessLogicException("The imagenUsuario with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.imagenUsuarioRepository.save({...persistedImagenUsuario, ...imagenUsuario});
    }

    async delete(id: string) {
        const imagenUsuario: ImagenUsuarioEntity = await this.imagenUsuarioRepository.findOne({where:{id}});
        if (!imagenUsuario)
          throw new BusinessLogicException("The imagenUsuario with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.imagenUsuarioRepository.remove(imagenUsuario);
    }

}
