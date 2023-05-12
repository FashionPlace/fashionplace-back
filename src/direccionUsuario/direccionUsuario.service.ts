/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DireccionUsuarioEntity } from './direccionUsuario.entity/direccionUsuario.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';

@Injectable()
export class DireccionUsuarioService {

    constructor(
        @InjectRepository(DireccionUsuarioEntity)
        private readonly direccionUsuarioRepository: Repository<DireccionUsuarioEntity>,

        @InjectRepository(UbicacionEntity)
        private readonly ubicacionRepository: Repository<UbicacionEntity>
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
        const savedDireccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.save(direccionUsuario);
        const ubicacion = new UbicacionEntity();
        ubicacion.id = savedDireccionUsuario.id;
        ubicacion.pais = savedDireccionUsuario.pais;
        ubicacion.ciudad = savedDireccionUsuario.ciudad;
        ubicacion.direccion = savedDireccionUsuario.direccion;
        ubicacion.adicional = savedDireccionUsuario.adicional;
        await this.ubicacionRepository.save(ubicacion);
        return savedDireccionUsuario;
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
