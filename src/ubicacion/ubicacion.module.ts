import { Module } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { UbicacionController } from './ubicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionEntity } from './ubicacion.entity/ubicacion.entity';

@Module({
  providers: [UbicacionService],
  controllers: [UbicacionController],
  imports: [TypeOrmModule.forFeature([UbicacionEntity])],
})
export class UbicacionModule {}
