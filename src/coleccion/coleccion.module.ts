import { Module } from '@nestjs/common';
import { ColeccionService } from './coleccion.service';
import { ColeccionController } from './coleccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColeccionEntity } from './coleccion.entity/coleccion.entity';

@Module({
  providers: [ColeccionService],
  controllers: [ColeccionController],
  imports: [TypeOrmModule.forFeature([ColeccionEntity])],
})
export class ColeccionModule {}
