/* eslint-disable prettier/prettier */
import { ImagenEntity } from "src/imagen/imagen.entity/imagen.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity()
export class ImagenProductoEntity extends ImagenEntity{

    @ManyToOne(() => ProductoEntity, producto => producto.imagenes)
    producto: ProductoEntity;

}
