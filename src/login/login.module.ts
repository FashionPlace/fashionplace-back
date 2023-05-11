import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';

@Module({
  providers: [LoginService],
  controllers: [LoginController],
  imports: [TypeOrmModule.forFeature([CompradorEntity])],
})
export class LoginModule {}
