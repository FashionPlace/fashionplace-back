import { ColeccionEntity } from "src/coleccion/coleccion.entity/coleccion.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImagenColeccionEntity {

    @OneToOne(() => ColeccionEntity, coleccion => coleccion.imagen)
    coleccion: ColeccionEntity;
    
}
