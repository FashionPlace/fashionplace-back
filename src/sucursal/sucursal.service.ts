/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SucursalEntity } from './sucursal.entity/sucursal.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { UbicacionSucursalEntity } from 'src/ubicacionSucursal/ubicacionSucursal.entity/ubicacionSucursal.entity';

@Injectable()
export class SucursalService {

    constructor(
        @InjectRepository(SucursalEntity)
        private readonly sucursalRepository: Repository<SucursalEntity>,
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>,
        @InjectRepository(UbicacionSucursalEntity)
        private readonly ubicacionSucursalRepository: Repository<UbicacionSucursalEntity>
    ){}

    async findAll(): Promise<SucursalEntity[]> {
        return await this.sucursalRepository.find({ relations: ["empresa", "productos", "ubicacion"] });
    }

    async findOne(id: string): Promise<SucursalEntity> {
        const sucursal: SucursalEntity = await this.sucursalRepository.findOne({where: {id}, relations: ["empresa", "productos", "ubicacion"] } );
        if (!sucursal)
          throw new BusinessLogicException("The sucursal with the given id was not found", BusinessError.NOT_FOUND);
        return sucursal;
    }

    async create(sucursal: SucursalEntity): Promise<SucursalEntity> {
        
        //Se obtiene la empresa a la que se va a vincular
        const empresa: EmpresaEntity = await this.empresaRepository.findOne({where: {id: sucursal.empresa.id}, relations: ["sucursales"]});
        if(!empresa)
            throw new BusinessLogicException("La empresa vinculada a la sucursal debe existir", BusinessError.PRECONDITION_FAILED);
        
        const savedUbicacionSucursal: UbicacionSucursalEntity = await this.ubicacionSucursalRepository.save(sucursal.ubicacion);
        sucursal.ubicacion = savedUbicacionSucursal;

        for (const sucursalEmpresa of empresa.sucursales) {
            if(sucursalEmpresa.ubicacion == sucursal.ubicacion)
                throw new BusinessLogicException("Ya existe una sucursal en esa ubicación", BusinessError.PRECONDITION_FAILED);
        }

        const savedSucursal: SucursalEntity = await this.sucursalRepository.save(sucursal)
        empresa.sucursales = [...empresa.sucursales, savedSucursal];
        await this.empresaRepository.save(empresa);
        return savedSucursal;
    }

    async update(id: string, sucursal: SucursalEntity): Promise<SucursalEntity> {
        const persistedSucursal: SucursalEntity = await this.sucursalRepository.findOne({where:{id}});
        if (!persistedSucursal)
          throw new BusinessLogicException("The sucursal with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.sucursalRepository.save({...persistedSucursal, ...sucursal});
    }

    async delete(id: string) {
        const sucursal: SucursalEntity = await this.sucursalRepository.findOne({where:{id}});
        if (!sucursal)
          throw new BusinessLogicException("The sucursal with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.sucursalRepository.remove(sucursal);
    }

}
