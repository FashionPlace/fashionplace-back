import { Module } from '@nestjs/common';
import { DireccionUsuarioService } from './direccionUsuario.service';
import { DireccionUsuarioController } from './direccionUsuario.controller';

@Module({
  providers: [DireccionUsuarioService],
  controllers: [DireccionUsuarioController]
})
export class DireccionUsuarioModule {}
