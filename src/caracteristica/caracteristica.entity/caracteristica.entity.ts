import { TagEntity } from "src/tag/tag.entity/tag.entity";
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

}
