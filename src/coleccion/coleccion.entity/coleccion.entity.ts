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

    @Column()
    imagen: string;

    @ManyToMany(() => ProductoEntity, producto => producto.colecciones)
    productos: ProductoEntity[];
}
