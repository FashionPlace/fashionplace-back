import { Module } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { UbicacionController } from './ubicacion.controller';

@Module({
  providers: [UbicacionService],
  controllers: [UbicacionController]
})
export class UbicacionModule {}
