/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from './empresa.entity/empresa.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { DireccionUsuarioEntity } from 'src/direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';

@Injectable()
export class EmpresaService {

    constructor(
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>,
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>,
        @InjectRepository(DireccionUsuarioEntity)
        private readonly direccionUsuarioRepository: Repository<DireccionUsuarioEntity>,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async findAll(): Promise<EmpresaEntity[]> {
        return await this.empresaRepository.find({ relations: ["direccion", "sucursales", "graficas", "metodosContacto"] });
    }

    async findOne(id: string): Promise<EmpresaEntity> {
        const empresa: EmpresaEntity = await this.empresaRepository.findOne({where: {id}, relations: ["direccion", "sucursales", "graficas", "metodosContacto"] } );
        if (!empresa)
          throw new BusinessLogicException("The empresa with the given id was not found", BusinessError.NOT_FOUND);
        return empresa;
    }

    async create(empresa: EmpresaEntity): Promise<EmpresaEntity> {
        const allCompradores: CompradorEntity[] = await this.compradorRepository.find();
        const allEmpresas: EmpresaEntity[] = await this.empresaRepository.find();
        if(allCompradores.find(u => {u.email == (empresa.email) || u.documento == (empresa.documento)}))
            throw new BusinessLogicException("Email no disponible: " + empresa.email, BusinessError.PRECONDITION_FAILED);
        if(allEmpresas.find(e => {e.email == empresa.email}))
            throw new BusinessLogicException("Email no disponible: " + empresa.email, BusinessError.PRECONDITION_FAILED);
        if(allCompradores.find(u => u.documento == (empresa.documento)))
            throw new BusinessLogicException("Ya existe un usuario registrado con ese documento: " + empresa.documento, BusinessError.PRECONDITION_FAILED);
        if(allEmpresas.find(e => {e.documento == empresa.documento}))
            throw new BusinessLogicException("Ya existe un usuario registrado con ese documento: " + empresa.documento, BusinessError.PRECONDITION_FAILED);
        
        const direccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.findOne({where: {id: empresa.direccion.id} } );
        if (!direccionUsuario)
            throw new BusinessLogicException("The direccionUsuario with the given id was not found", BusinessError.NOT_FOUND);
        
        const savedEmpresa: EmpresaEntity = await this.empresaRepository.save(empresa);
        const usuario = new UsuarioEntity();
        usuario.id= savedEmpresa.id;
        usuario.nombre= savedEmpresa.nombre;
        usuario.documento= savedEmpresa.documento;
        usuario.contrasenia= savedEmpresa.contrasenia;
        usuario.email= savedEmpresa.email;
        usuario.emailRespaldo= savedEmpresa.emailRespaldo;
        usuario.celular= savedEmpresa.celular;
        usuario.foto= savedEmpresa.foto;
        usuario.direccion= savedEmpresa.direccion;
        const savedUsuario: UsuarioEntity = await this.usuarioRepository.save(usuario);
        return savedEmpresa;
    }

    async update(id: string, empresa: EmpresaEntity): Promise<EmpresaEntity> {
        const persistedEmpresa: EmpresaEntity = await this.empresaRepository.findOne({where:{id}});
        if (!persistedEmpresa)
          throw new BusinessLogicException("The empresa with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.empresaRepository.save({...persistedEmpresa, ...empresa});
    }

    async delete(id: string) {
        const empresa: EmpresaEntity = await this.empresaRepository.findOne({where:{id}});
        if (!empresa)
          throw new BusinessLogicException("The empresa with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.empresaRepository.remove(empresa);
    }

}
