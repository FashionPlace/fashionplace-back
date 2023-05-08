import { Module } from '@nestjs/common';
import { CarritoProductoService } from './carritoProducto.service';
import { CarritoProductoController } from './carritoProducto.controller';

@Module({
  providers: [CarritoProductoService],
  controllers: [CarritoProductoController]
})
export class CarritoProductoModule {}
