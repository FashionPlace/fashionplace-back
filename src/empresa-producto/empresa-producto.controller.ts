import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { EmpresaProductoService } from './empresa-producto.service';

@Controller('empresas')
@UseInterceptors(BusinessErrorsInterceptor)
export class EmpresaProductoController {

    constructor(private readonly empresaProductoService: EmpresaProductoService){}

    @Get(':empresaId/productos')
    async findProductosByEmpresaId(@Param('empresaId') empresaId: string){
        return await this.empresaProductoService.findProductosByEmpresaId(empresaId);
    }
}
