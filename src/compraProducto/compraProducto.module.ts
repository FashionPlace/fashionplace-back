import { Module } from '@nestjs/common';
import { CompraProductoService } from './compraProducto.service';
import { CompraProductoController } from './compraProducto.controller';

@Module({
  providers: [CompraProductoService],
  controllers: [CompraProductoController]
})
export class CompraProductoModule {}
