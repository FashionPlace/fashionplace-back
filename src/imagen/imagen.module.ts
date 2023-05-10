import { Module } from '@nestjs/common';
import { ImagenService } from './imagen.service';
import { ImagenController } from './imagen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenEntity } from './imagen.entity/imagen.entity';

@Module({
  providers: [ImagenService],
  controllers: [ImagenController],
  imports: [TypeOrmModule.forFeature([ImagenEntity])],
})
export class ImagenModule {}
