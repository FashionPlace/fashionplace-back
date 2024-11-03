/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompradorEntity } from './comprador.entity/comprador.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { CarritoEntity } from 'src/carrito/carrito.entity/carrito.entity';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { DireccionUsuarioEntity } from 'src/direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';

@Injectable()
export class CompradorService {

    constructor(
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>,
        @InjectRepository(CarritoEntity)
        private readonly carritoRepository: Repository<CarritoEntity>,
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
        @InjectRepository(DireccionUsuarioEntity)
        private readonly direccionUsuarioRepository: Repository<DireccionUsuarioEntity>
    ){}

    async findAll(): Promise<CompradorEntity[]> {
        return await this.compradorRepository.find({ relations: ["direccion", "compras", "carrito", "visitas", "comentarios"] });
    }

    async findOne(id: string): Promise<CompradorEntity> {
        const comprador: CompradorEntity = await this.compradorRepository.findOne({where: {id}, relations: ["direccion", "compras", "carrito", "visitas", "comentarios"] } );
        if (!comprador)
          throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);
        return comprador;
    }

    async create(comprador: CompradorEntity): Promise<CompradorEntity> {

        const allCompradores: CompradorEntity[] = await this.compradorRepository.find();
        const allEmpresas: EmpresaEntity[] = await this.empresaRepository.find();
        if(allCompradores.find(u => u.email == (comprador.email) || u.documento == (comprador.documento)))
            throw new BusinessLogicException("Email no disponible: " + comprador.email, BusinessError.PRECONDITION_FAILED);
        if(allEmpresas.find(e => e.email == comprador.email))
            throw new BusinessLogicException("Email no disponible: " + comprador.email, BusinessError.PRECONDITION_FAILED);
        if(allCompradores.find(u => u.documento == (comprador.documento)))
            throw new BusinessLogicException("Ya existe un usuario registrado con ese documento: " + comprador.documento, BusinessError.PRECONDITION_FAILED);
        if(allEmpresas.find(e => e.documento == comprador.documento))
            throw new BusinessLogicException("Ya existe un usuario registrado con ese documento: " + comprador.documento, BusinessError.PRECONDITION_FAILED);
        
        const direccionUsuario: DireccionUsuarioEntity = await this.direccionUsuarioRepository.findOne({where: {id: comprador.direccion.id} } );
        if (!direccionUsuario)
            throw new BusinessLogicException("The direccionUsuario with the given id was not found", BusinessError.NOT_FOUND);
    
        const carrito = new CarritoEntity();
        carrito.fecha = new Date();
        const savedCarrito: CarritoEntity = await this.carritoRepository.save(carrito);
        comprador.carrito = savedCarrito;
        const savedComprador: CompradorEntity = await this.compradorRepository.save(comprador);
        const usuario = new UsuarioEntity();
        usuario.id= savedComprador.id;
        usuario.nombre= savedComprador.nombre;
        usuario.documento= savedComprador.documento;
        usuario.contrasenia= savedComprador.contrasenia;
        usuario.email= savedComprador.email;
        usuario.emailRespaldo= savedComprador.emailRespaldo;
        usuario.celular= savedComprador.celular;
        usuario.foto= savedComprador.foto;
        usuario.direccion= savedComprador.direccion;
        await this.usuarioRepository.save(usuario);
        return savedComprador;
    }

    async update(id: string, comprador: CompradorEntity): Promise<CompradorEntity> {
        const persistedComprador: CompradorEntity = await this.compradorRepository.findOne({where:{id}});
        if (!persistedComprador)
          throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.compradorRepository.save({...persistedComprador, ...comprador});
    }

    async delete(id: string) {
        const comprador: CompradorEntity = await this.compradorRepository.findOne({where:{id}, relations: ["carrito"]});
        const carrito: CarritoEntity = await this.carritoRepository.findOne({where:{id: comprador.carrito.id}});

        if (!comprador)
          throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);

        if (!carrito)
          throw new BusinessLogicException("The carrito with the given id was not found", BusinessError.NOT_FOUND);
        
        await this.compradorRepository.remove(comprador);
        await this.carritoRepository.remove(carrito);
    }

}
