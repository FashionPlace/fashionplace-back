import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaEntity } from './empresa.entity/empresa.entity';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';

@Module({
  providers: [EmpresaService],
  controllers: [EmpresaController],
  imports: [TypeOrmModule.forFeature([EmpresaEntity, CompradorEntity])],
})
export class EmpresaModule {}
