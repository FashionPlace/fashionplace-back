import { Module } from '@nestjs/common';
import { UbicacionSucursalController } from './ubicacionSucursal.controller';
import { UbicacionSucursalService } from './ubicacionSucursal.service';

@Module({
  controllers: [UbicacionSucursalController],
  providers: [UbicacionSucursalService]
})
export class UbicacionSucursalModule {}
