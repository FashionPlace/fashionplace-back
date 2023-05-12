/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { DireccionUsuarioEntity } from '../direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,

        @InjectRepository(DireccionUsuarioEntity)
        private readonly direccionUsuarioRepository: Repository<DireccionUsuarioEntity>
    ){}

    async findAll(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find({ relations: ["direccion"] });
    }

    async findOne(id: string): Promise<UsuarioEntity> {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id}, relations: ["direccion"] } );
        if (!usuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
        return usuario;
    }

    async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {

        const direccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.findOne({where: {id: usuario.direccion.id} } );
        if (!direccionUsuario)
            throw new BusinessLogicException("The direccionUsuario with the given id was not found", BusinessError.NOT_FOUND);

        return await this.usuarioRepository.save(usuario);
    }

    async update(id: string, usuario: UsuarioEntity): Promise<UsuarioEntity> {
        const persistedUsuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});
        if (!persistedUsuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
        
        const direccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.findOne({where: {id: usuario.direccion.id} } );
        if (!direccionUsuario)
            throw new BusinessLogicException("The direccionUsuario with the given id was not found", BusinessError.NOT_FOUND);
  

        return await this.usuarioRepository.save({...persistedUsuario, ...usuario});
    }

    async delete(id: string) {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});
        if (!usuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.usuarioRepository.remove(usuario);
    }

}
