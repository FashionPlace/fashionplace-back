import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from './empresa.entity/empresa.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';

@Injectable()
export class EmpresaService {

    constructor(
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>,
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>
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

        return await this.empresaRepository.save(empresa);
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
