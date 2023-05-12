import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioController } from './comentario.controller';
import { ComentarioEntity } from './comentario.entity/comentario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';

@Module({
  providers: [ComentarioService],
  controllers: [ComentarioController],
  imports: [TypeOrmModule.forFeature([ComentarioEntity,CompradorEntity,ProductoEntity])],
})
export class ComentarioModule {}
