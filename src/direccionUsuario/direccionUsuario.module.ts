/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DireccionUsuarioService } from './direccionUsuario.service';
import { DireccionUsuarioController } from './direccionUsuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionUsuarioEntity } from './direccionUsuario.entity/direccionUsuario.entity';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';

@Module({
  providers: [DireccionUsuarioService],
  controllers: [DireccionUsuarioController],
  imports: [TypeOrmModule.forFeature([DireccionUsuarioEntity, UbicacionEntity])],
})
export class DireccionUsuarioModule {}
