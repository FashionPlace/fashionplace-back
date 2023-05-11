import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { GraficaService } from './grafica.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { GraficaEntity } from './grafica.entity/grafica.entity';
import { GraficaDto } from './grafica.dto/grafica.dto';
import { plainToInstance } from 'class-transformer';

@Controller('graficas')
@UseInterceptors(BusinessErrorsInterceptor)
export class GraficaController {

    constructor(private readonly graficaService: GraficaService) {}

    @Get()
    async findAll() {
        return await this.graficaService.findAll();
    }

    @Get(':graficaId')
    async findOne(@Param('graficaId') graficaId: string) {
        return await this.graficaService.findOne(graficaId);
    }

    @Post()
    async create(@Body() graficasDto: GraficaDto) {
        const grafica: GraficaEntity = plainToInstance(GraficaEntity, graficasDto);
        return await this.graficaService.create(grafica);
    }

    @Put(':graficaId')
    async update(@Param('graficaId') graficaId: string, @Body() graficasDto: GraficaDto) {
        const grafica: GraficaEntity = plainToInstance(GraficaEntity, graficasDto);
        return await this.graficaService.update(graficaId, grafica);
    }

    @Delete(':graficaId')
    @HttpCode(204)
    async delete(@Param('graficaId') graficaId: string) {
        return await this.graficaService.delete(graficaId);
    }    
}
