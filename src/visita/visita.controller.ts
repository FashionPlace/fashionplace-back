import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { VisitaEntity } from './visita.entity/visita.entity';
import { VisitaDto } from './visita.dto/visita.dto';
import { plainToInstance } from 'class-transformer';

@Controller('visitas')
@UseInterceptors(BusinessErrorsInterceptor)
export class VisitaController {

    constructor(private readonly visitaService: VisitaService) {}

    @Get()
    async findAll() {
        return await this.visitaService.findAll();
    }

    @Get(':visitaId')
    async findOne(@Param('visitaId') visitaId: string) {
        return await this.visitaService.findOne(visitaId);
    }

    @Post()
    async create(@Body() visitasDto: VisitaDto) {
        const visita: VisitaEntity = plainToInstance(VisitaEntity, visitasDto);
        return await this.visitaService.create(visita);
    }

    @Put(':visitaId')
    async update(@Param('visitaId') visitaId: string, @Body() visitasDto: VisitaDto) {
        const visita: VisitaEntity = plainToInstance(VisitaEntity, visitasDto);
        return await this.visitaService.update(visitaId, visita);
    }

    @Delete(':visitaId')
    @HttpCode(204)
    async delete(@Param('visitaId') visitaId: string) {
        return await this.visitaService.delete(visitaId);
    }    
}
