import { Module } from '@nestjs/common';
import { ImagenUsuarioController } from './imagenUsuario.controller';
import { ImagenUsuarioService } from './imagenUsuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenUsuarioEntity } from './imagenUsuario.entity/imagenUsuario.entity';

@Module({
  controllers: [ImagenUsuarioController],
  providers: [ImagenUsuarioService],
  imports: [TypeOrmModule.forFeature([ImagenUsuarioEntity])],
})
export class ImagenUsuarioModule {}
