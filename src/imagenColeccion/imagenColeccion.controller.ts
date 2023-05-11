import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ImagenColeccionService } from './imagenColeccion.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ImagenColeccionEntity } from './imagenColeccion.entity/imagenColeccion.entity';
import { ImagenColeccionDto } from './imagenColeccion.dto/imagenColeccion.dto';
import { plainToInstance } from 'class-transformer';

@Controller('imagen-colecciones')
@UseInterceptors(BusinessErrorsInterceptor)
export class ImagenColeccionController {

    constructor(private readonly imagenColeccionService: ImagenColeccionService) {}

    @Get()
    async findAll() {
        return await this.imagenColeccionService.findAll();
    }

    @Get(':imagenColeccionId')
    async findOne(@Param('imagenColeccionId') imagenColeccionId: string) {
        return await this.imagenColeccionService.findOne(imagenColeccionId);
    }

    @Post()
    async create(@Body() imagenColeccionsDto: ImagenColeccionDto) {
        const imagenColeccion: ImagenColeccionEntity = plainToInstance(ImagenColeccionEntity, imagenColeccionsDto);
        return await this.imagenColeccionService.create(imagenColeccion);
    }

    @Put(':imagenColeccionId')
    async update(@Param('imagenColeccionId') imagenColeccionId: string, @Body() imagenColeccionsDto: ImagenColeccionDto) {
        const imagenColeccion: ImagenColeccionEntity = plainToInstance(ImagenColeccionEntity, imagenColeccionsDto);
        return await this.imagenColeccionService.update(imagenColeccionId, imagenColeccion);
    }

    @Delete(':imagenColeccionId')
    @HttpCode(204)
    async delete(@Param('imagenColeccionId') imagenColeccionId: string) {
        return await this.imagenColeccionService.delete(imagenColeccionId);
    }    
}
