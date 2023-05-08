import { Module } from '@nestjs/common';
import { ColeccionesService } from './colecciones.service';
import { ColeccionesController } from './colecciones.controller';

@Module({
  providers: [ColeccionesService],
  controllers: [ColeccionesController]
})
export class ColeccionesModule {}
