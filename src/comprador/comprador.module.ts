/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { CompradorController } from './comprador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompradorEntity } from './comprador.entity/comprador.entity';
import { CarritoEntity } from 'src/carrito/carrito.entity/carrito.entity';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { DireccionUsuarioEntity } from 'src/direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';

@Module({
  providers: [CompradorService],
  controllers: [CompradorController],
  imports: [TypeOrmModule.forFeature([CompradorEntity, CarritoEntity, EmpresaEntity,UsuarioEntity, DireccionUsuarioEntity])],
})
export class CompradorModule {}
