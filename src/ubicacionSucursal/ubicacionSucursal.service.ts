/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UbicacionSucursalEntity } from './ubicacionSucursal.entity/ubicacionSucursal.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';

@Injectable()
export class UbicacionSucursalService {

    constructor(
        @InjectRepository(UbicacionSucursalEntity)
        private readonly ubicacionSucursalRepository: Repository<UbicacionSucursalEntity>,
        
        @InjectRepository(UbicacionEntity)
        private readonly ubicacionRepository: Repository<UbicacionEntity>
    ){}

    async findAll(): Promise<UbicacionSucursalEntity[]> {
        return await this.ubicacionSucursalRepository.find({ relations: ["sucursal"] });
    }

    async findOne(id: string): Promise<UbicacionSucursalEntity> {
        const ubicacionSucursal: UbicacionSucursalEntity = await this.ubicacionSucursalRepository.findOne({where: {id}, relations: ["sucursal"] } );
        if (!ubicacionSucursal)
          throw new BusinessLogicException("The ubicacionSucursal with the given id was not found", BusinessError.NOT_FOUND);
        return ubicacionSucursal;
    }

    async create(ubicacionSucursal: UbicacionSucursalEntity): Promise<UbicacionSucursalEntity> {
        const savedubicacionSucursal: UbicacionSucursalEntity = await this.ubicacionSucursalRepository.save(ubicacionSucursal);
        const ubicacion = new UbicacionEntity();
        ubicacion.id = savedubicacionSucursal.id;
        ubicacion.pais = savedubicacionSucursal.pais;
        ubicacion.ciudad = savedubicacionSucursal.ciudad;
        ubicacion.direccion = savedubicacionSucursal.direccion;
        ubicacion.adicional = savedubicacionSucursal.adicional;
        await this.ubicacionRepository.save(ubicacion);
        return savedubicacionSucursal
    }

    async update(id: string, ubicacionSucursal: UbicacionSucursalEntity): Promise<UbicacionSucursalEntity> {
        const persistedUbicacionSucursal: UbicacionSucursalEntity = await this.ubicacionSucursalRepository.findOne({where:{id}});
        if (!persistedUbicacionSucursal)
          throw new BusinessLogicException("The ubicacionSucursal with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.ubicacionSucursalRepository.save({...persistedUbicacionSucursal, ...ubicacionSucursal});
    }

    async delete(id: string) {
        const ubicacionSucursal: UbicacionSucursalEntity = await this.ubicacionSucursalRepository.findOne({where:{id}});
        if (!ubicacionSucursal)
          throw new BusinessLogicException("The ubicacionSucursal with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.ubicacionSucursalRepository.remove(ubicacionSucursal);
    }

}
