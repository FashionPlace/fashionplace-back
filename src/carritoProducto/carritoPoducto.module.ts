import { Module } from '@nestjs/common';
import { CarritoProductoService } from './carritoProducto.service';
import { CarritoProductoController } from './carritoProducto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoProductoEntity } from './carritoProducto.entity/carritoProducto.entity';
import { CarritoEntity } from 'src/carrito/carrito.entity/carrito.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';

@Module({
  providers: [CarritoProductoService],
  controllers: [CarritoProductoController],
  imports: [TypeOrmModule.forFeature([CarritoProductoEntity,CarritoEntity,ProductoEntity])],
})
export class CarritoProductoModule {}
