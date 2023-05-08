import { Module } from '@nestjs/common';
import { ImagenProductoService } from './imagen-producto.service';
import { ImagenProductoController } from './imagen-producto.controller';

@Module({
  providers: [ImagenProductoService],
  controllers: [ImagenProductoController]
})
export class ImagenProductoModule {}
