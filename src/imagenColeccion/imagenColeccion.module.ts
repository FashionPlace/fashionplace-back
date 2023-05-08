import { Module } from '@nestjs/common';
import { ImagenColeccionController } from './imagenColeccion.controller';
import { ImagenColeccionService } from './imagenColeccion.service';

@Module({
  controllers: [ImagenColeccionController],
  providers: [ImagenColeccionService]
})
export class ImagenColeccionModule {}
