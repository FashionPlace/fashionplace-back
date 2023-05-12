/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraEntity } from './compra.entity/compra.entity';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';

@Module({
  providers: [CompraService],
  controllers: [CompraController],
  imports: [TypeOrmModule.forFeature([CompraEntity,CompradorEntity])],
})
export class CompraModule {}
