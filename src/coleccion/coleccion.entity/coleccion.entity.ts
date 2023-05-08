import { ImagenColeccionEntity } from "src/imagenColeccion/imagenColeccion.entity/imagenColeccion.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";
import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ColeccionEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @OneToOne(() => ImagenColeccionEntity, imagenColeccion => imagenColeccion.coleccion)
    imagen: ImagenColeccionEntity;

    @ManyToMany(() => ProductoEntity, producto => producto.colecciones)
    productos: ProductoEntity[];
}