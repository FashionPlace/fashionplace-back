import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { UsuarioDto } from './usuario.dto/usuario.dto';
import { plainToInstance } from 'class-transformer';

@Controller('usuarios')
@UseInterceptors(BusinessErrorsInterceptor)
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    async findAll() {
        return await this.usuarioService.findAll();
    }

    @Get(':usuarioId')
    async findOne(@Param('usuarioId') usuarioId: string) {
        return await this.usuarioService.findOne(usuarioId);
    }

    @Post()
    async create(@Body() usuariosDto: UsuarioDto) {
        const usuario: UsuarioEntity = plainToInstance(UsuarioEntity, usuariosDto);
        return await this.usuarioService.create(usuario);
    }

    @Put(':usuarioId')
    async update(@Param('usuarioId') usuarioId: string, @Body() usuariosDto: UsuarioDto) {
        const usuario: UsuarioEntity = plainToInstance(UsuarioEntity, usuariosDto);
        return await this.usuarioService.update(usuarioId, usuario);
    }

    @Delete(':usuarioId')
    @HttpCode(204)
    async delete(@Param('usuarioId') usuarioId: string) {
        return await this.usuarioService.delete(usuarioId);
    }    
}
