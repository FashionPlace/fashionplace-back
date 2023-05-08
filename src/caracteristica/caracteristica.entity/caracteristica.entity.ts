import { TagEntity } from "src/tag/tag.entity/tag.entity";
import { ProductoEntity } from "../../producto/producto.entity/producto.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaracteristicaEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;
    
    @ManyToMany(() => TagEntity, tag => tag.caracteristicas)
    tags: TagEntity[];

    @ManyToMany(() => ProductoEntity, producto => producto.caracteristicas)
    productos: ProductoEntity[];
}
