import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity/producto.entity';
import { SucursalEntity } from 'src/sucursal/sucursal.entity/sucursal.entity';
import { ImagenProductoEntity } from 'src/imagenProducto/imagenProducto.entity/imagenProducto.entity';

@Module({
  providers: [ProductoService],
  controllers: [ProductoController],
  imports: [TypeOrmModule.forFeature([ProductoEntity,SucursalEntity,ImagenProductoEntity])],
})
export class ProductoModule {}
