import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { CompradorEntity } from './comprador.entity/comprador.entity';
import { CompradorDto } from './comprador.dto/comprador.dto';
import { plainToInstance } from 'class-transformer';

@Controller('compradores')
@UseInterceptors(BusinessErrorsInterceptor)
export class CompradorController {

    constructor(private readonly compradorService: CompradorService) {}

    @Get()
    async findAll() {
        return await this.compradorService.findAll();
    }

    @Get(':compradorId')
    async findOne(@Param('compradorId') compradorId: string) {
        return await this.compradorService.findOne(compradorId);
    }

    @Post()
    async create(@Body() compradorsDto: CompradorDto) {
        const comprador: CompradorEntity = plainToInstance(CompradorEntity, compradorsDto);
        return await this.compradorService.create(comprador);
    }

    @Put(':compradorId')
    async update(@Param('compradorId') compradorId: string, @Body() compradorsDto: CompradorDto) {
        const comprador: CompradorEntity = plainToInstance(CompradorEntity, compradorsDto);
        return await this.compradorService.update(compradorId, comprador);
    }

    @Delete(':compradorId')
    @HttpCode(204)
    async delete(@Param('compradorId') compradorId: string) {
        return await this.compradorService.delete(compradorId);
    }    
}
