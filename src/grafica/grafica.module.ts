import { Module } from '@nestjs/common';
import { GraficaService } from './grafica.service';
import { GraficaController } from './grafica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraficaEntity } from './grafica.entity/grafica.entity';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';

@Module({
  providers: [GraficaService],
  controllers: [GraficaController],
  imports: [TypeOrmModule.forFeature([GraficaEntity,EmpresaEntity])],
})
export class GraficaModule {}
