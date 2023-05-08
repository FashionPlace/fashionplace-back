import { Module } from '@nestjs/common';
import { CaracteristicasService } from './caracteristicas.service';
import { CaracteristicasController } from './caracteristicas.controller';

@Module({
  providers: [CaracteristicasService],
  controllers: [CaracteristicasController]
})
export class CaracteristicasModule {}
