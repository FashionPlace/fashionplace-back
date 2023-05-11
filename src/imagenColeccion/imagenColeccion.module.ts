import { Module } from '@nestjs/common';
import { ImagenColeccionService } from './imagenColeccion.service';
import { ImagenColeccionController } from './imagenColeccion.controller';
import { ImagenColeccionEntity } from './imagenColeccion.entity/imagenColeccion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ImagenColeccionService],
  controllers: [ImagenColeccionController],
  imports: [TypeOrmModule.forFeature([ImagenColeccionEntity])],
})
export class ImagenColeccionModule {}
