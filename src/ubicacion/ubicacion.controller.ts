import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { UbicacionEntity } from './ubicacion.entity/ubicacion.entity';
import { UbicacionDto } from './ubicacion.dto/ubicacion.dto';
import { plainToInstance } from 'class-transformer';

@Controller('ubicaciones')
@UseInterceptors(BusinessErrorsInterceptor)
export class UbicacionController {

    constructor(private readonly ubicacionService: UbicacionService) {}

    @Get()
    async findAll() {
        return await this.ubicacionService.findAll();
    }

    @Get(':ubicacionId')
    async findOne(@Param('ubicacionId') ubicacionId: string) {
        return await this.ubicacionService.findOne(ubicacionId);
    }

    @Post()
    async create(@Body() ubicacionsDto: UbicacionDto) {
        const ubicacion: UbicacionEntity = plainToInstance(UbicacionEntity, ubicacionsDto);
        return await this.ubicacionService.create(ubicacion);
    }

    @Put(':ubicacionId')
    async update(@Param('ubicacionId') ubicacionId: string, @Body() ubicacionsDto: UbicacionDto) {
        const ubicacion: UbicacionEntity = plainToInstance(UbicacionEntity, ubicacionsDto);
        return await this.ubicacionService.update(ubicacionId, ubicacion);
    }

    @Delete(':ubicacionId')
    @HttpCode(204)
    async delete(@Param('ubicacionId') ubicacionId: string) {
        return await this.ubicacionService.delete(ubicacionId);
    }    
}
