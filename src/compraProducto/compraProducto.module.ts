/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompraProductoService } from './compraProducto.service';
import { CompraProductoController } from './compraProducto.controller';
import { CompraProductoEntity } from './compraProducto.entity/compraProducto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from '../producto/producto.entity/producto.entity';
import { CompraEntity } from 'src/compra/compra.entity/compra.entity';

@Module({
  providers: [CompraProductoService],
  controllers: [CompraProductoController],
  imports: [TypeOrmModule.forFeature([CompraProductoEntity,ProductoEntity,CompraEntity])],
})
export class CompraProductoModule {}
