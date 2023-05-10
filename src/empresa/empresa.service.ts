import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from './empresa.entity/empresa.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class EmpresaService {

    constructor(
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>
    ){}

    async findAll(): Promise<EmpresaEntity[]> {
        return await this.empresaRepository.find({ relations: ["imagen", "direccion", "sucursales", "graficas", "metodosContacto"] });
    }

    async findOne(id: string): Promise<EmpresaEntity> {
        const empresa: EmpresaEntity = await this.empresaRepository.findOne({where: {id}, relations: ["imagen", "direccion", "sucursales", "graficas", "metodosContacto"] } );
        if (!empresa)
          throw new BusinessLogicException("The empresa with the given id was not found", BusinessError.NOT_FOUND);
        return empresa;
    }

    async create(empresa: EmpresaEntity): Promise<EmpresaEntity> {
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
