import { Module } from '@nestjs/common';
import { ImagenProductoService } from './imagenProducto.service';
import { ImagenProductoController } from './imagenProducto.controller';

@Module({
  providers: [ImagenProductoService],
  controllers: [ImagenProductoController]
})
export class ImagenProductoModule {}
