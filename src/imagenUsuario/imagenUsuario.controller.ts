import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ImagenUsuarioService } from './imagenUsuario.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ImagenUsuarioEntity } from './imagenUsuario.entity/imagenUsuario.entity';
import { ImagenUsuarioDto } from './imagenUsuario.dto/imagenUsuario.dto';
import { plainToInstance } from 'class-transformer';

@Controller('imagen-usuarios')
@UseInterceptors(BusinessErrorsInterceptor)
export class ImagenUsuarioController {

    constructor(private readonly imagenUsuarioService: ImagenUsuarioService) {}

    @Get()
    async findAll() {
        return await this.imagenUsuarioService.findAll();
    }

    @Get(':imagenUsuarioId')
    async findOne(@Param('imagenUsuarioId') imagenUsuarioId: string) {
        return await this.imagenUsuarioService.findOne(imagenUsuarioId);
    }

    @Post()
    async create(@Body() imagenUsuariosDto: ImagenUsuarioDto) {
        const imagenUsuario: ImagenUsuarioEntity = plainToInstance(ImagenUsuarioEntity, imagenUsuariosDto);
        return await this.imagenUsuarioService.create(imagenUsuario);
    }

    @Put(':imagenUsuarioId')
    async update(@Param('imagenUsuarioId') imagenUsuarioId: string, @Body() imagenUsuariosDto: ImagenUsuarioDto) {
        const imagenUsuario: ImagenUsuarioEntity = plainToInstance(ImagenUsuarioEntity, imagenUsuariosDto);
        return await this.imagenUsuarioService.update(imagenUsuarioId, imagenUsuario);
    }

    @Delete(':imagenUsuarioId')
    @HttpCode(204)
    async delete(@Param('imagenUsuarioId') imagenUsuarioId: string) {
        return await this.imagenUsuarioService.delete(imagenUsuarioId);
    }    
}
