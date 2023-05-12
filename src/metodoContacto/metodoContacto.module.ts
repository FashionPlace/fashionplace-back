import { Module } from '@nestjs/common';
import { MetodoContactoService } from './metodoContacto.service';
import { MetodoContactoController } from './metodoContacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoContactoEntity } from './metodoContacto.entity/metodoContacto.entity';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';

@Module({
  providers: [MetodoContactoService],
  controllers: [MetodoContactoController],
  imports: [TypeOrmModule.forFeature([MetodoContactoEntity,EmpresaEntity])],
})
export class MetodoContactoModule {}
