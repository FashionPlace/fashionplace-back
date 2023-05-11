import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ComentarioEntity } from './comentario.entity/comentario.entity';
import { ComentarioDto } from './comentario.dto/comentario.dto';
import { plainToInstance } from 'class-transformer';

@Controller('comentarios')
@UseInterceptors(BusinessErrorsInterceptor)
export class ComentarioController {

    constructor(private readonly comentarioService: ComentarioService) {}

    @Get()
    async findAll() {
        return await this.comentarioService.findAll();
    }

    @Get(':comentarioId')
    async findOne(@Param('comentarioId') comentarioId: string) {
        return await this.comentarioService.findOne(comentarioId);
    }

    @Post()
    async create(@Body() comentariosDto: ComentarioDto) {
        const comentario: ComentarioEntity = plainToInstance(ComentarioEntity, comentariosDto);
        return await this.comentarioService.create(comentario);
    }

    @Put(':comentarioId')
    async update(@Param('comentarioId') comentarioId: string, @Body() comentariosDto: ComentarioDto) {
        const comentario: ComentarioEntity = plainToInstance(ComentarioEntity, comentariosDto);
        return await this.comentarioService.update(comentarioId, comentario);
    }

    @Delete(':comentarioId')
    @HttpCode(204)
    async delete(@Param('comentarioId') comentarioId: string) {
        return await this.comentarioService.delete(comentarioId);
    }    
}
