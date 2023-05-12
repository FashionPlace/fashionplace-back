/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UbicacionSucursalController } from './ubicacionSucursal.controller';
import { UbicacionSucursalService } from './ubicacionSucursal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionSucursalEntity } from './ubicacionSucursal.entity/ubicacionSucursal.entity';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';

@Module({
  controllers: [UbicacionSucursalController],
  providers: [UbicacionSucursalService],
  imports: [TypeOrmModule.forFeature([UbicacionSucursalEntity, UbicacionEntity])],
})
export class UbicacionSucursalModule {}
