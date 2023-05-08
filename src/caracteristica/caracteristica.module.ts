import { Module } from '@nestjs/common';
import { CaracteristicaService } from './caracteristica.service';
import { CaracteristicaController } from './caracteristica.controller';

@Module({
  providers: [CaracteristicaService],
  controllers: [CaracteristicaController]
})
export class CaracteristicaModule {}
