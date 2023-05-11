import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { DireccionUsuarioService } from './direccionUsuario.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { DireccionUsuarioEntity } from './direccionUsuario.entity/direccionUsuario.entity';
import { DireccionUsuarioDto } from './direccionUsuario.dto/direccionUsuario.dto';
import { plainToInstance } from 'class-transformer';

@Controller('direccion-usuarios')
@UseInterceptors(BusinessErrorsInterceptor)
export class DireccionUsuarioController {

    constructor(private readonly direccionUsuarioService: DireccionUsuarioService) {}

    @Get()
    async findAll() {
        return await this.direccionUsuarioService.findAll();
    }

    @Get(':direccionUsuarioId')
    async findOne(@Param('direccionUsuarioId') direccionUsuarioId: string) {
        return await this.direccionUsuarioService.findOne(direccionUsuarioId);
    }

    @Post()
    async create(@Body() direccionUsuariosDto: DireccionUsuarioDto) {
        const direccionUsuario: DireccionUsuarioEntity = plainToInstance(DireccionUsuarioEntity, direccionUsuariosDto);
        return await this.direccionUsuarioService.create(direccionUsuario);
    }

    @Put(':direccionUsuarioId')
    async update(@Param('direccionUsuarioId') direccionUsuarioId: string, @Body() direccionUsuariosDto: DireccionUsuarioDto) {
        const direccionUsuario: DireccionUsuarioEntity = plainToInstance(DireccionUsuarioEntity, direccionUsuariosDto);
        return await this.direccionUsuarioService.update(direccionUsuarioId, direccionUsuario);
    }

    @Delete(':direccionUsuarioId')
    @HttpCode(204)
    async delete(@Param('direccionUsuarioId') direccionUsuarioId: string) {
        return await this.direccionUsuarioService.delete(direccionUsuarioId);
    }    
}
