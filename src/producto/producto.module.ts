import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity/producto.entity';

@Module({
  providers: [ProductoService],
  controllers: [ProductoController],
  imports: [TypeOrmModule.forFeature([ProductoEntity])],
})
export class ProductoModule {}
