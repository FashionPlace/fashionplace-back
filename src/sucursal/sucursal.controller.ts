import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { SucursalEntity } from './sucursal.entity/sucursal.entity';
import { SucursalDto } from './sucursal.dto/sucursal.dto';
import { plainToInstance } from 'class-transformer';

@Controller('sucursales')
@UseInterceptors(BusinessErrorsInterceptor)
export class SucursalController {

    constructor(private readonly sucursalService: SucursalService) {}

    @Get()
    async findAll() {
        return await this.sucursalService.findAll();
    }

    @Get(':sucursalId')
    async findOne(@Param('sucursalId') sucursalId: string) {
        return await this.sucursalService.findOne(sucursalId);
    }

    @Post()
    async create(@Body() sucursalDto: SucursalDto) {
        const sucursal: SucursalEntity = plainToInstance(SucursalEntity, sucursalDto);
        return await this.sucursalService.create(sucursal);
    }

    @Put(':sucursalId')
    async update(@Param('sucursalId') sucursalId: string, @Body() sucursalDto: SucursalDto) {
        const sucursal: SucursalEntity = plainToInstance(SucursalEntity, sucursalDto);
        return await this.sucursalService.update(sucursalId, sucursal);
    }

    @Delete(':sucursalId')
    @HttpCode(204)
    async delete(@Param('sucursalId') sucursalId: string) {
        return await this.sucursalService.delete(sucursalId);
    }    
}
