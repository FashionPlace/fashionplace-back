import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CarritoProductoService } from './carritoProducto.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { CarritoProductoEntity } from './carritoProducto.entity/carritoProducto.entity';
import { CarritoProductoDto } from './carritoProducto.dto/carritoProducto.dto';
import { plainToInstance } from 'class-transformer';

@Controller('carritoProductos')
@UseInterceptors(BusinessErrorsInterceptor)
export class CarritoProductoController {

    constructor(private readonly carritoProductoService: CarritoProductoService) {}

    @Get()
    async findAll() {
        return await this.carritoProductoService.findAll();
    }

    @Get(':carritoProductoId')
    async findOne(@Param('carritoProductoId') carritoProductoId: string) {
        return await this.carritoProductoService.findOne(carritoProductoId);
    }

    @Post()
    async create(@Body() carritoProductosDto: CarritoProductoDto) {
        const carritoProducto: CarritoProductoEntity = plainToInstance(CarritoProductoEntity, carritoProductosDto);
        return await this.carritoProductoService.create(carritoProducto);
    }

    @Put(':carritoProductoId')
    async update(@Param('carritoProductoId') carritoProductoId: string, @Body() carritoProductosDto: CarritoProductoDto) {
        const carritoProducto: CarritoProductoEntity = plainToInstance(CarritoProductoEntity, carritoProductosDto);
        return await this.carritoProductoService.update(carritoProductoId, carritoProducto);
    }

    @Delete(':carritoProductoId')
    @HttpCode(204)
    async delete(@Param('carritoProductoId') carritoProductoId: string) {
        return await this.carritoProductoService.delete(carritoProductoId);
    }    
}
