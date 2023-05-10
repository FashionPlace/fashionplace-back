import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DireccionUsuarioEntity } from './direccionUsuario.entity/direccionUsuario.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class DireccionUsuarioService {

    constructor(
        @InjectRepository(DireccionUsuarioEntity)
        private readonly direccionUsuarioRepository: Repository<DireccionUsuarioEntity>
    ){}

    async findAll(): Promise<DireccionUsuarioEntity[]> {
        return await this.direccionUsuarioRepository.find({ relations: ["usuarios"] });
    }

    async findOne(id: string): Promise<DireccionUsuarioEntity> {
        const direccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.findOne({where: {id}, relations: ["usuarios"] } );
        if (!direccionUsuario)
          throw new BusinessLogicException("The direccionUsuario with the given id was not found", BusinessError.NOT_FOUND);
        return direccionUsuario;
    }

    async create(direccionUsuario: DireccionUsuarioEntity): Promise<DireccionUsuarioEntity> {
        return await this.direccionUsuarioRepository.save(direccionUsuario);
    }

    async update(id: string, direccionUsuario: DireccionUsuarioEntity): Promise<DireccionUsuarioEntity> {
        const persistedDireccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.findOne({where:{id}});
        if (!persistedDireccionUsuario)
          throw new BusinessLogicException("The direccionUsuario with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.direccionUsuarioRepository.save({...persistedDireccionUsuario, ...direccionUsuario});
    }

    async delete(id: string) {
        const direccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.findOne({where:{id}});
        if (!direccionUsuario)
          throw new BusinessLogicException("The direccionUsuario with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.direccionUsuarioRepository.remove(direccionUsuario);
    }

}
