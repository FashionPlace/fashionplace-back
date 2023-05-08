import { Module } from '@nestjs/common';
import { ColeccionService } from './coleccion.service';
import { ColeccionController } from './coleccion.controller';

@Module({
  providers: [ColeccionService],
  controllers: [ColeccionController]
})
export class ColeccionesModule {}
