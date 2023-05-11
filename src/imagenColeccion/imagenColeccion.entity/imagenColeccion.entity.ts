/* eslint-disable prettier/prettier */
import { ColeccionEntity } from "src/coleccion/coleccion.entity/coleccion.entity";
import { ImagenEntity } from "src/imagen/imagen.entity/imagen.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity()
export class ImagenColeccionEntity extends ImagenEntity{

    @ManyToOne(() => ColeccionEntity, coleccion => coleccion.imagen)
    coleccion: ColeccionEntity;

}
