import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoEntity } from './carrito.entity/carrito.entity';

@Module({
  providers: [CarritoService],
  controllers: [CarritoController],
  imports: [TypeOrmModule.forFeature([CarritoEntity])],
})
export class CarritoModule {}
