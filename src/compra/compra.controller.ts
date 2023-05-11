import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CompraService } from './compra.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { CompraEntity } from './compra.entity/compra.entity';
import { CompraDto } from './compra.dto/compra.dto';
import { plainToInstance } from 'class-transformer';

@Controller('compras')
@UseInterceptors(BusinessErrorsInterceptor)
export class CompraController {

    constructor(private readonly compraService: CompraService) {}

    @Get()
    async findAll() {
        return await this.compraService.findAll();
    }

    @Get(':compraId')
    async findOne(@Param('compraId') compraId: string) {
        return await this.compraService.findOne(compraId);
    }

    @Post()
    async create(@Body() comprasDto: CompraDto) {
        const compra: CompraEntity = plainToInstance(CompraEntity, comprasDto);
        return await this.compraService.create(compra);
    }

    @Put(':compraId')
    async update(@Param('compraId') compraId: string, @Body() comprasDto: CompraDto) {
        const compra: CompraEntity = plainToInstance(CompraEntity, comprasDto);
        return await this.compraService.update(compraId, compra);
    }

    @Delete(':compraId')
    @HttpCode(204)
    async delete(@Param('compraId') compraId: string) {
        return await this.compraService.delete(compraId);
    }    
}
