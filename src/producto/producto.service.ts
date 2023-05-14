import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity/producto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { SucursalEntity } from 'src/sucursal/sucursal.entity/sucursal.entity';
import { ImagenProductoEntity } from 'src/imagenProducto/imagenProducto.entity/imagenProducto.entity';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>,
        @InjectRepository(SucursalEntity)
        private readonly sucursalRepository: Repository<SucursalEntity>,
        @InjectRepository(ImagenProductoEntity)
        private readonly imagenProductoRepository: Repository<ImagenProductoEntity>
    ){}

    async findAll(): Promise<ProductoEntity[]> {
        return await this.productoRepository.find({ relations: ["sucursales", "carritoProductos", "compraProductos", "visitas", "imagenes", "comentarios", "colecciones", "tags"] });
    }

    async findOne(id: string): Promise<ProductoEntity> {
        const producto: ProductoEntity = await this.productoRepository.findOne({where: {id}, relations: ["sucursales", "carritoProductos", "compraProductos", "visitas", "imagenes", "comentarios", "colecciones", "tags"] } );
        if (!producto)
          throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);
        return producto;
    }

    async create(producto: ProductoEntity): Promise<ProductoEntity> {

        for(let sucursal of producto.sucursales){
            const persistedSucursal: SucursalEntity = await this.sucursalRepository.findOne({where:{id: sucursal.id}});
            if (!persistedSucursal)
                throw new BusinessLogicException("The sucursal with the given id was not found", BusinessError.NOT_FOUND);
        }

        for(let imagen of producto.imagenes){
            const persistedImagen: ImagenProductoEntity = await this.imagenProductoRepository.findOne({where:{id: imagen.id}});
            if (!persistedImagen)
                throw new BusinessLogicException("The imagen with the given id was not found", BusinessError.NOT_FOUND);
        }

        return await this.productoRepository.save(producto);
    }

    async update(id: string, producto: ProductoEntity): Promise<ProductoEntity> {
        const persistedProducto: ProductoEntity = await this.productoRepository.findOne({where:{id}});
        if (!persistedProducto)
          throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.productoRepository.save({...persistedProducto, ...producto});
    }

    async delete(id: string) {
        const producto: ProductoEntity = await this.productoRepository.findOne({where:{id}});
        if (!producto)
          throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.productoRepository.remove(producto);
    }

    /****** Extras */
    async getFeaturedItems(): Promise<ProductoEntity[]> {
        const productos: ProductoEntity[] = await this.productoRepository.find({ relations: ["sucursales", "carritoProductos", "compraProductos", "visitas", "imagenes", "comentarios", "colecciones", "tags"] });
        return productos.slice(0, 3);
    }

}
