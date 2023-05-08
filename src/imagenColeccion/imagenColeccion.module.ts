import { Module } from '@nestjs/common';
import { ImagenColeccionController } from './imagen-coleccion.controller';
import { ImagenColeccionService } from './imagen-coleccion.service';

@Module({
  controllers: [ImagenColeccionController],
  providers: [ImagenColeccionService]
})
export class ImagenColeccionModule {}
