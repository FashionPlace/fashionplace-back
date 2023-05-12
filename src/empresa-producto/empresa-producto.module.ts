import { Module } from '@nestjs/common';
import { EmpresaProductoService } from './empresa-producto.service';
import { EmpresaProductoController } from './empresa-producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';

@Module({
  providers: [EmpresaProductoService],
  controllers: [EmpresaProductoController],
  imports: [TypeOrmModule.forFeature([EmpresaEntity,ProductoEntity])]
})
export class EmpresaProductoModule {}
