import { ColeccionesEntity } from "src/colecciones/colecciones.entity/colecciones.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImagenColeccionEntity {

    @OneToOne(type => ColeccionesEntity, coleccion => coleccion.imagenColeccion)
    coleccion: ColeccionesEntity;
    
}
