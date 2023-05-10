import { Module } from '@nestjs/common';
import { GraficaService } from './grafica.service';
import { GraficaController } from './grafica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraficaEntity } from './grafica.entity/grafica.entity';

@Module({
  providers: [GraficaService],
  controllers: [GraficaController],
  imports: [TypeOrmModule.forFeature([GraficaEntity])],
})
export class GraficaModule {}
