/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UbicacionEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    pais: string;

    @Column()
    ciudad: string;

    @Column()
    direccion: string;

    @Column()
    adicional: string;

}
