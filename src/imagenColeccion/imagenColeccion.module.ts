import { Module } from '@nestjs/common';
import { ImagenColeccionController } from './imagenColeccion.controller';
import { ImagenColeccionService } from './imagenColeccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenColeccionEntity } from './imagenColeccion.entity/imagenColeccion.entity';

@Module({
  controllers: [ImagenColeccionController],
  providers: [ImagenColeccionService],
  imports: [TypeOrmModule.forFeature([ImagenColeccionEntity])],
})
export class ImagenColeccionModule {}
