import { Module } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { CompradorController } from './comprador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompradorEntity } from './comprador.entity/comprador.entity';

@Module({
  providers: [CompradorService],
  controllers: [CompradorController],
  imports: [TypeOrmModule.forFeature([CompradorEntity])],
})
export class CompradorModule {}
