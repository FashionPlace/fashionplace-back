import { Module } from '@nestjs/common';
import { UbicacionSucursalController } from './ubicacionSucursal.controller';
import { UbicacionSucursalService } from './ubicacionSucursal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionSucursalEntity } from './ubicacionSucursal.entity/ubicacionSucursal.entity';

@Module({
  controllers: [UbicacionSucursalController],
  providers: [UbicacionSucursalService],
  imports: [TypeOrmModule.forFeature([UbicacionSucursalEntity])],
})
export class UbicacionSucursalModule {}
