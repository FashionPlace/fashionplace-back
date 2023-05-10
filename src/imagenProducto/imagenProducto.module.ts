import { Module } from '@nestjs/common';
import { ImagenProductoService } from './imagenProducto.service';
import { ImagenProductoController } from './imagenProducto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenProductoEntity } from './imagenProducto.entity/imagenProducto.entity';

@Module({
  providers: [ImagenProductoService],
  controllers: [ImagenProductoController],
  imports: [TypeOrmModule.forFeature([ImagenProductoEntity])],
})
export class ImagenProductoModule {}
