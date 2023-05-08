import { Module } from '@nestjs/common';
import { MetodoContactoService } from './metodo-contacto.service';
import { MetodoContactoController } from './metodo-contacto.controller';

@Module({
  providers: [MetodoContactoService],
  controllers: [MetodoContactoController]
})
export class MetodoContactoModule {}
