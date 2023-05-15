import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ProductoEntity } from './producto.entity/producto.entity';
import { ProductoDto } from './producto.dto/producto.dto';
import { plainToInstance } from 'class-transformer';

@Controller('productos')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProductoController {

    constructor(private readonly productoService: ProductoService) {}

    @Get('/list')
    async findAll() {
        return await this.productoService.findAll();
    }

    @Get('/detail/:productoId')
    async findOne(@Param('productoId') productoId: string) {
        return await this.productoService.findOne(productoId);
    }

    @Post()
    async create(@Body() productosDto: ProductoDto) {
        const producto: ProductoEntity = plainToInstance(ProductoEntity, productosDto);
        return await this.productoService.create(producto);
    }

    @Put(':productoId')
    async update(@Param('productoId') productoId: string, @Body() productosDto: ProductoDto) {
        const producto: ProductoEntity = plainToInstance(ProductoEntity, productosDto);
        return await this.productoService.update(productoId, producto);
    }

    @Delete(':productoId')
    @HttpCode(204)
    async delete(@Param('productoId') productoId: string) {
        return await this.productoService.delete(productoId);
    }
    
    /*** Extras */

    @Get('/featured')
    async getFeaturedItems() {
        return await this.productoService.getFeaturedItems();
    }

    @Get('/ia/:clase')
    async getTagProducts(@Param('clase') clase: string) {
        return await this.productoService.getTagProducts(clase);
    }
}
