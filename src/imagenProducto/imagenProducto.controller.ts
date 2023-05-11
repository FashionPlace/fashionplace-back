import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ImagenProductoService } from './imagenProducto.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ImagenProductoEntity } from './imagenProducto.entity/imagenProducto.entity';
import { plainToInstance } from 'class-transformer';
import { ImagenProductoDto } from './imagenProducto.dto/imagenProducto.dto';

@Controller('imagen-productos')
@UseInterceptors(BusinessErrorsInterceptor)
export class ImagenProductoController {

    constructor(private readonly imagenProductoService: ImagenProductoService) {}

    @Get()
    async findAll() {
        return await this.imagenProductoService.findAll();
    }

    @Get(':imagenProductoId')
    async findOne(@Param('imagenProductoId') imagenProductoId: string) {
        return await this.imagenProductoService.findOne(imagenProductoId);
    }

    @Post()
    async create(@Body() imagenProductoDto: ImagenProductoDto) {
        const imagenProducto: ImagenProductoEntity = plainToInstance(ImagenProductoEntity, imagenProductoDto);
        return await this.imagenProductoService.create(imagenProducto);
    }

    @Put(':imagenProductoId')
    async update(@Param('imagenProductoId') imagenProductoId: string, @Body() imagenProductoDto: ImagenProductoDto) {
        const imagenProducto: ImagenProductoEntity = plainToInstance(ImagenProductoEntity, imagenProductoDto);
        return await this.imagenProductoService.update(imagenProductoId, imagenProducto);
    }

    @Delete(':imagenProductoId')
    @HttpCode(204)
    async delete(@Param('imagenProductoId') imagenProductoId: string) {
        return await this.imagenProductoService.delete(imagenProductoId);
    }    
}
