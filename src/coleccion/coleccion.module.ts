import { Module } from '@nestjs/common';
import { ColeccionService } from './coleccion.service';
import { ColeccionController } from './coleccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColeccionEntity } from './coleccion.entity/coleccion.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';

@Module({
  providers: [ColeccionService],
  controllers: [ColeccionController],
  imports: [TypeOrmModule.forFeature([ColeccionEntity,ProductoEntity])],
})
export class ColeccionModule {}
