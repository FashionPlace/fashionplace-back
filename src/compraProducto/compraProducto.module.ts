import { Module } from '@nestjs/common';
import { CompraProductoService } from './compraProducto.service';
import { CompraProductoController } from './compraProducto.controller';
import { CompraProductoEntity } from './compraProducto.entity/compraProducto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CompraProductoService],
  controllers: [CompraProductoController],
  imports: [TypeOrmModule.forFeature([CompraProductoEntity])],
})
export class CompraProductoModule {}
