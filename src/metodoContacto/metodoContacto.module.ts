import { Module } from '@nestjs/common';
import { MetodoContactoService } from './metodoContacto.service';
import { MetodoContactoController } from './metodoContacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoContactoEntity } from './metodoContacto.entity/metodoContacto.entity';

@Module({
  providers: [MetodoContactoService],
  controllers: [MetodoContactoController],
  imports: [TypeOrmModule.forFeature([MetodoContactoEntity])],
})
export class MetodoContactoModule {}
