/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImagenEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    url: string;

}
