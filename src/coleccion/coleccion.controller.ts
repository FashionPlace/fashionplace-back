import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ColeccionService } from './coleccion.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ColeccionEntity } from './coleccion.entity/coleccion.entity';
import { ColeccionDto } from './coleccion.dto/coleccion.dto';
import { plainToInstance } from 'class-transformer';

@Controller('colecciones')
@UseInterceptors(BusinessErrorsInterceptor)
export class ColeccionController {

    constructor(private readonly coleccionService: ColeccionService) {}

    @Get()
    async findAll() {
        return await this.coleccionService.findAll();
    }

    @Get(':coleccionId')
    async findOne(@Param('coleccionId') coleccionId: string) {
        return await this.coleccionService.findOne(coleccionId);
    }

    @Post()
    async create(@Body() coleccionsDto: ColeccionDto) {
        const coleccion: ColeccionEntity = plainToInstance(ColeccionEntity, coleccionsDto);
        return await this.coleccionService.create(coleccion);
    }

    @Put(':coleccionId')
    async update(@Param('coleccionId') coleccionId: string, @Body() coleccionsDto: ColeccionDto) {
        const coleccion: ColeccionEntity = plainToInstance(ColeccionEntity, coleccionsDto);
        return await this.coleccionService.update(coleccionId, coleccion);
    }

    @Delete(':coleccionId')
    @HttpCode(204)
    async delete(@Param('coleccionId') coleccionId: string) {
        return await this.coleccionService.delete(coleccionId);
    }    
}
