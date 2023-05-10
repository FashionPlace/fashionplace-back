import { Module } from '@nestjs/common';
import { CarritoProductoService } from './carritoProducto.service';
import { CarritoProductoController } from './carritoProducto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoProductoEntity } from './carritoProducto.entity/carritoProducto.entity';

@Module({
  providers: [CarritoProductoService],
  controllers: [CarritoProductoController],
  imports: [TypeOrmModule.forFeature([CarritoProductoEntity])],
})
export class CarritoProductoModule {}
