import { Module } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { CompradorController } from './comprador.controller';

@Module({
  providers: [CompradorService],
  controllers: [CompradorController]
})
export class CompradorModule {}
