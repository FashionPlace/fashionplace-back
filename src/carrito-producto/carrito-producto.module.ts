import { Module } from '@nestjs/common';
import { CarritoProductoService } from './carrito-producto.service';
import { CarritoProductoController } from './carrito-producto.controller';

@Module({
  providers: [CarritoProductoService],
  controllers: [CarritoProductoController]
})
export class CarritoProductoModule {}
