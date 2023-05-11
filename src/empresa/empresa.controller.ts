import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { EmpresaEntity } from './empresa.entity/empresa.entity';
import { EmpresaDto } from './empresa.dto/empresa.dto';
import { plainToInstance } from 'class-transformer';

@Controller('empresas')
@UseInterceptors(BusinessErrorsInterceptor)
export class EmpresaController {

    constructor(private readonly empresaService: EmpresaService) {}

    @Get()
    async findAll() {
        return await this.empresaService.findAll();
    }

    @Get(':empresaId')
    async findOne(@Param('empresaId') empresaId: string) {
        return await this.empresaService.findOne(empresaId);
    }

    @Post()
    async create(@Body() empresasDto: EmpresaDto) {
        const empresa: EmpresaEntity = plainToInstance(EmpresaEntity, empresasDto);
        return await this.empresaService.create(empresa);
    }

    @Put(':empresaId')
    async update(@Param('empresaId') empresaId: string, @Body() empresasDto: EmpresaDto) {
        const empresa: EmpresaEntity = plainToInstance(EmpresaEntity, empresasDto);
        return await this.empresaService.update(empresaId, empresa);
    }

    @Delete(':empresaId')
    @HttpCode(204)
    async delete(@Param('empresaId') empresaId: string) {
        return await this.empresaService.delete(empresaId);
    }    
}
