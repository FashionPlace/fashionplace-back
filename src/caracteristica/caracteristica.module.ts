import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaracteristicaController } from './caracteristica.controller';
import { CaracteristicaEntity } from './caracteristica.entity/caracteristica.entity';
import { CaracteristicaService } from './caracteristica.service';

@Module({
  providers: [CaracteristicaService],
  controllers: [CaracteristicaController],
  imports: [TypeOrmModule.forFeature([CaracteristicaEntity])],
})
export class CaracteristicaModule {}
