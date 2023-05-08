import { Module } from '@nestjs/common';
import { ImagenUsuarioController } from './imagenUsuario.controller';
import { ImagenUsuarioService } from './imagenUsuario.service';

@Module({
  controllers: [ImagenUsuarioController],
  providers: [ImagenUsuarioService]
})
export class ImagenUsuarioModule {}
