import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioController } from './comentario.controller';
import { ComentarioEntity } from './comentario.entity/comentario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ComentarioService],
  controllers: [ComentarioController],
  imports: [TypeOrmModule.forFeature([ComentarioEntity])],
})
export class ComentarioModule {}
