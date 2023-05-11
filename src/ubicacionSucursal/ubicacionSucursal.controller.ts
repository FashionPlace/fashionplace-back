import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { UbicacionSucursalService } from './ubicacionSucursal.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { UbicacionSucursalEntity } from './ubicacionSucursal.entity/ubicacionSucursal.entity';
import { UbicacionSucursalDto } from './ubicacionSucursal.dto/ubicacionSucursal.dto';
import { plainToInstance } from 'class-transformer';

@Controller('ubicacion-sucursales')
@UseInterceptors(BusinessErrorsInterceptor)
export class UbicacionSucursalController {

    constructor(private readonly ubicacionSucursalService: UbicacionSucursalService) {}

    @Get()
    async findAll() {
        return await this.ubicacionSucursalService.findAll();
    }

    @Get(':ubicacionSucursalId')
    async findOne(@Param('ubicacionSucursalId') ubicacionSucursalId: string) {
        return await this.ubicacionSucursalService.findOne(ubicacionSucursalId);
    }

    @Post()
    async create(@Body() ubicacionSucursalsDto: UbicacionSucursalDto) {
        const ubicacionSucursal: UbicacionSucursalEntity = plainToInstance(UbicacionSucursalEntity, ubicacionSucursalsDto);
        return await this.ubicacionSucursalService.create(ubicacionSucursal);
    }

    @Put(':ubicacionSucursalId')
    async update(@Param('ubicacionSucursalId') ubicacionSucursalId: string, @Body() ubicacionSucursalsDto: UbicacionSucursalDto) {
        const ubicacionSucursal: UbicacionSucursalEntity = plainToInstance(UbicacionSucursalEntity, ubicacionSucursalsDto);
        return await this.ubicacionSucursalService.update(ubicacionSucursalId, ubicacionSucursal);
    }

    @Delete(':ubicacionSucursalId')
    @HttpCode(204)
    async delete(@Param('ubicacionSucursalId') ubicacionSucursalId: string) {
        return await this.ubicacionSucursalService.delete(ubicacionSucursalId);
    }    
}
