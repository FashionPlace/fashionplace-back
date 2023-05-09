/* eslint-disable prettier/prettier */
import { ColeccionEntity } from "src/coleccion/coleccion.entity/coleccion.entity";
import { ImagenEntity } from "src/imagen/imagen.entity/imagen.entity";
import { Entity, OneToOne } from "typeorm";

@Entity()
export class ImagenColeccionEntity extends ImagenEntity{

    @OneToOne(() => ColeccionEntity, coleccion => coleccion.imagen)
    coleccion: ColeccionEntity;
    
}
