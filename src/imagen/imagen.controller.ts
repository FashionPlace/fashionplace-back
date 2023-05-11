import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ImagenService } from './imagen.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ImagenEntity } from './imagen.entity/imagen.entity';
import { ImagenDto } from './imagen.dto/imagen.dto';
import { plainToInstance } from 'class-transformer';

@Controller('imagenes')
@UseInterceptors(BusinessErrorsInterceptor)
export class ImagenController {

    constructor(private readonly imagenService: ImagenService) {}

    @Get()
    async findAll() {
        return await this.imagenService.findAll();
    }

    @Get(':imagenId')
    async findOne(@Param('imagenId') imagenId: string) {
        return await this.imagenService.findOne(imagenId);
    }

    @Post()
    async create(@Body() imagensDto: ImagenDto) {
        const imagen: ImagenEntity = plainToInstance(ImagenEntity, imagensDto);
        return await this.imagenService.create(imagen);
    }

    @Put(':imagenId')
    async update(@Param('imagenId') imagenId: string, @Body() imagensDto: ImagenDto) {
        const imagen: ImagenEntity = plainToInstance(ImagenEntity, imagensDto);
        return await this.imagenService.update(imagenId, imagen);
    }

    @Delete(':imagenId')
    @HttpCode(204)
    async delete(@Param('imagenId') imagenId: string) {
        return await this.imagenService.delete(imagenId);
    }    
}
