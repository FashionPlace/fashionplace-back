import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async findAll(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find({ relations: ["imagen", "direccion"] });
    }

    async findOne(id: string): Promise<UsuarioEntity> {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id}, relations: ["imagen", "direccion"] } );
        if (!usuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
        return usuario;
    }

    async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        return await this.usuarioRepository.save(usuario);
    }

    async update(id: string, usuario: UsuarioEntity): Promise<UsuarioEntity> {
        const persistedUsuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});
        if (!persistedUsuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.usuarioRepository.save({...persistedUsuario, ...usuario});
    }

    async delete(id: string) {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});
        if (!usuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.usuarioRepository.remove(usuario);
    }

}
