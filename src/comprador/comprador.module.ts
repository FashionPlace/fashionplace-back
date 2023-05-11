import { Module } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { CompradorController } from './comprador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompradorEntity } from './comprador.entity/comprador.entity';
import { CarritoEntity } from 'src/carrito/carrito.entity/carrito.entity';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';

@Module({
  providers: [CompradorService],
  controllers: [CompradorController],
  imports: [TypeOrmModule.forFeature([CompradorEntity, CarritoEntity, EmpresaEntity])],
})
export class CompradorModule {}
