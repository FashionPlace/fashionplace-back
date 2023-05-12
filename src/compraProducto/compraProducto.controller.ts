/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CompraProductoService } from './compraProducto.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { CompraProductoEntity } from './compraProducto.entity/compraProducto.entity';
import { CompraProductoDto } from './compraProducto.dto/compraProducto.dto';
import { plainToInstance } from 'class-transformer';

@Controller('compra-productos')
@UseInterceptors(BusinessErrorsInterceptor)
export class CompraProductoController {

    constructor(private readonly compraProductoService: CompraProductoService) {}

    @Get()
    async findAll() {
        return await this.compraProductoService.findAll();
    }

    @Get(':compraProductoId')
    async findOne(@Param('compraProductoId') compraProductoId: string) {
        return await this.compraProductoService.findOne(compraProductoId);
    }

    @Post()
    async create(@Body() compraProductosDto: CompraProductoDto) {
        const compraProducto: CompraProductoEntity = plainToInstance(CompraProductoEntity, compraProductosDto);
        return await this.compraProductoService.create(compraProducto);
    }

    @Put(':compraProductoId')
    async update(@Param('compraProductoId') compraProductoId: string, @Body() compraProductosDto: CompraProductoDto) {
        const compraProducto: CompraProductoEntity = plainToInstance(CompraProductoEntity, compraProductosDto);
        return await this.compraProductoService.update(compraProductoId, compraProducto);
    }

    @Delete(':compraProductoId')
    @HttpCode(204)
    async delete(@Param('compraProductoId') compraProductoId: string) {
        return await this.compraProductoService.delete(compraProductoId);
    }    
}
