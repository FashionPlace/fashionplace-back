import { Module } from '@nestjs/common';
import { GraficaService } from './grafica.service';
import { GraficaController } from './grafica.controller';

@Module({
  providers: [GraficaService],
  controllers: [GraficaController]
})
export class GraficaModule {}
