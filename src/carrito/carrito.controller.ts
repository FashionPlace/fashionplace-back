import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { CarritoEntity } from './carrito.entity/carrito.entity';
import { CarritoDto } from './carrito.dto/carrito.dto';
import { plainToInstance } from 'class-transformer';

@Controller('carritos')
@UseInterceptors(BusinessErrorsInterceptor)
export class CarritoController {

    constructor(private readonly carritoService: CarritoService) {}

    @Get()
    async findAll() {
        return await this.carritoService.findAll();
    }

    @Get(':carritoId')
    async findOne(@Param('carritoId') carritoId: string) {
        return await this.carritoService.findOne(carritoId);
    }

    @Post()
    async create(@Body() carritosDto: CarritoDto) {
        const carrito: CarritoEntity = plainToInstance(CarritoEntity, carritosDto);
        return await this.carritoService.create(carrito);
    }

    @Put(':carritoId')
    async update(@Param('carritoId') carritoId: string, @Body() carritosDto: CarritoDto) {
        const carrito: CarritoEntity = plainToInstance(CarritoEntity, carritosDto);
        return await this.carritoService.update(carritoId, carrito);
    }

    @Delete(':carritoId')
    @HttpCode(204)
    async delete(@Param('carritoId') carritoId: string) {
        return await this.carritoService.delete(carritoId);
    }    
}
