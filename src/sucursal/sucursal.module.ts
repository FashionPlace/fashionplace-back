import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SucursalEntity } from './sucursal.entity/sucursal.entity';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { UbicacionSucursalEntity } from 'src/ubicacionSucursal/ubicacionSucursal.entity/ubicacionSucursal.entity';

@Module({
  providers: [SucursalService],
  controllers: [SucursalController],
  imports: [TypeOrmModule.forFeature([SucursalEntity, EmpresaEntity, UbicacionSucursalEntity])],
})
export class SucursalModule {}
