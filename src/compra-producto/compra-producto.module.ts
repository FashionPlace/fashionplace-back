import { Module } from '@nestjs/common';
import { CompraProductoService } from './compra-producto.service';
import { CompraProductoController } from './compra-producto.controller';

@Module({
  providers: [CompraProductoService],
  controllers: [CompraProductoController]
})
export class CompraProductoModule {}
