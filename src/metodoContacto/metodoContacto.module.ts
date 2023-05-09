import { Module } from '@nestjs/common';
import { MetodoContactoService } from './metodoContacto.service';
import { MetodoContactoController } from './metodoContacto.controller';

@Module({
  providers: [MetodoContactoService],
  controllers: [MetodoContactoController]
})
export class MetodoContactoModule {}
