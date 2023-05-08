import { TagEntity } from "src/tag/tag.entity/tag.entity";
import { ProductoEntity } from "../../producto/producto.entity/producto.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaracteristicasEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;
    
    @ManyToOne(() => TagEntity, tag => tag.caracteristicas)
    Tag: TagEntity;

    @ManyToMany(() => ProductoEntity, producto => producto.caracteristicas)
    productos: ProductoEntity[];
}
