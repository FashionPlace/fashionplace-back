import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { MetodoContactoService } from './metodoContacto.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { MetodoContactoEntity } from './metodoContacto.entity/metodoContacto.entity';
import { MetodoContactoDto } from './metodoContacto.dto/metodoContacto.dto';
import { plainToInstance } from 'class-transformer';

@Controller('metodos-contacto')
@UseInterceptors(BusinessErrorsInterceptor)
export class MetodoContactoController {

    constructor(private readonly metodoContactoService: MetodoContactoService) {}

    @Get()
    async findAll() {
        return await this.metodoContactoService.findAll();
    }

    @Get(':metodoContactoId')
    async findOne(@Param('metodoContactoId') metodoContactoId: string) {
        return await this.metodoContactoService.findOne(metodoContactoId);
    }

    @Post()
    async create(@Body() metodoContactosDto: MetodoContactoDto) {
        const metodoContacto: MetodoContactoEntity = plainToInstance(MetodoContactoEntity, metodoContactosDto);
        return await this.metodoContactoService.create(metodoContacto);
    }

    @Put(':metodoContactoId')
    async update(@Param('metodoContactoId') metodoContactoId: string, @Body() metodoContactosDto: MetodoContactoDto) {
        const metodoContacto: MetodoContactoEntity = plainToInstance(MetodoContactoEntity, metodoContactosDto);
        return await this.metodoContactoService.update(metodoContactoId, metodoContacto);
    }

    @Delete(':metodoContactoId')
    @HttpCode(204)
    async delete(@Param('metodoContactoId') metodoContactoId: string) {
        return await this.metodoContactoService.delete(metodoContactoId);
    }    
}
