/* eslint-disable prettier/prettier */
import { CaracteristicaEntity } from 'src/caracteristica/caracteristica.entity/caracteristica.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TagEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    nombre: string;

    @ManyToMany(() => CaracteristicaEntity, caracteristica => caracteristica.tags)
    @JoinTable()
    caracteristicas: CaracteristicaEntity[];

}
