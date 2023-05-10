import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SucursalEntity } from './sucursal.entity/sucursal.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class SucursalService {

    constructor(
        @InjectRepository(SucursalEntity)
        private readonly sucursalRepository: Repository<SucursalEntity>
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
        return await this.sucursalRepository.save(sucursal);
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
