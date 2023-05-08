import { ProductoEntity } from "src/producto/producto.entity/producto.entity";
import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ColeccionesEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @OneToOne(() => ImagenColeccionEntity, imagenColeccion => imagenColeccion.coleccion)
    imagenColeccion: ImagenColeccionEntity;

    @ManyToMany(() => ProductoEntity, producto => producto.colecciones)
    productos: ProductoEntity[];
}
