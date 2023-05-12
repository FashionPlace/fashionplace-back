/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DireccionUsuarioService } from './direccionUsuario.service';
import { DireccionUsuarioController } from './direccionUsuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionUsuarioEntity } from './direccionUsuario.entity/direccionUsuario.entity';

@Module({
  providers: [DireccionUsuarioService],
  controllers: [DireccionUsuarioController],
  imports: [TypeOrmModule.forFeature([DireccionUsuarioEntity])],
})
export class DireccionUsuarioModule {}
