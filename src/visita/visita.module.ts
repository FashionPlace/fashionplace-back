import { Module } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';

@Module({
  providers: [VisitaService],
  controllers: [VisitaController]
})
export class VisitaModule {}
