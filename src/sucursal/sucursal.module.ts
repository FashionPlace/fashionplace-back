import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SucursalEntity } from './sucursal.entity/sucursal.entity';

@Module({
  providers: [SucursalService],
  controllers: [SucursalController],
  imports: [TypeOrmModule.forFeature([SucursalEntity])],
})
export class SucursalModule {}
