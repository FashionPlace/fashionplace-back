import { Module } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitaEntity } from './visita.entity/visita.entity';

@Module({
  providers: [VisitaService],
  controllers: [VisitaController],
  imports: [TypeOrmModule.forFeature([VisitaEntity])],
})
export class VisitaModule {}
