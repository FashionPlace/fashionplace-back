import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository, Unique } from 'typeorm';

@Injectable()
export class EmpresaProductoService {

    constructor(
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>,
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>
    ){}

    async findProductosByEmpresaId(empresaId: string): Promise<ProductoEntity[]> {

        const empresa: EmpresaEntity = await this.empresaRepository.findOne({where: {id: empresaId}, relations: ["sucursales"]});
        if (!empresa)
          throw new BusinessLogicException("The empresa with the given id was not found", BusinessError.NOT_FOUND)

        const productos: ProductoEntity[] = await this.productoRepository.find({where: {sucursales: empresa.sucursales}, relations: ["sucursales", "carritoProductos", "compraProductos", "visitas", "imagenes", "comentarios", "colecciones", "caracteristicas"]});
        const uniqueProductNames = [];
        const productosUnicos: ProductoEntity[] = productos.filter(producto => { 
            if (uniqueProductNames.includes(producto.nombre)) {
                return false;
            } else {
                uniqueProductNames.push(producto.nombre)
                return true
            }
        });
        return productosUnicos;
    }
    
}
