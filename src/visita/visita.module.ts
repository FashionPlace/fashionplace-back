import { Module } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitaEntity } from './visita.entity/visita.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';

@Module({
  providers: [VisitaService],
  controllers: [VisitaController],
  imports: [TypeOrmModule.forFeature([VisitaEntity,ProductoEntity,CompradorEntity])],
})
export class VisitaModule {}
