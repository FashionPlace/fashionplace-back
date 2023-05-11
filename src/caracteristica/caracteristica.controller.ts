import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CaracteristicaService } from './caracteristica.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { CaracteristicaEntity } from './caracteristica.entity/caracteristica.entity';
import { CaracteristicaDto } from './caracteristica.dto/caracteristica.dto';
import { plainToInstance } from 'class-transformer';

@Controller('caracteristicas')
@UseInterceptors(BusinessErrorsInterceptor)
export class CaracteristicaController {

    constructor(private readonly caracteristicaService: CaracteristicaService) {}

    @Get()
    async findAll() {
        return await this.caracteristicaService.findAll();
    }

    @Get(':caracteristicaId')
    async findOne(@Param('caracteristicaId') caracteristicaId: string) {
        return await this.caracteristicaService.findOne(caracteristicaId);
    }

    @Post()
    async create(@Body() caracteristicasDto: CaracteristicaDto) {
        const caracteristica: CaracteristicaEntity = plainToInstance(CaracteristicaEntity, caracteristicasDto);
        return await this.caracteristicaService.create(caracteristica);
    }

    @Put(':caracteristicaId')
    async update(@Param('caracteristicaId') caracteristicaId: string, @Body() caracteristicasDto: CaracteristicaDto) {
        const caracteristica: CaracteristicaEntity = plainToInstance(CaracteristicaEntity, caracteristicasDto);
        return await this.caracteristicaService.update(caracteristicaId, caracteristica);
    }

    @Delete(':caracteristicaId')
    @HttpCode(204)
    async delete(@Param('caracteristicaId') caracteristicaId: string) {
        return await this.caracteristicaService.delete(caracteristicaId);
    }    
}
