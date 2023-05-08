import { CompradorEntity } from "src/comprador/comprador.entity/comprador.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ComentarioEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    titulo: string;
    
    @Column()
    descripcion: string;
        
    @Column()
    calificacion: number;

    @Column()
    fecha: Date;

    @ManyToOne(() => ProductoEntity, producto => producto.comentarios)
    producto: ProductoEntity;

    @ManyToOne(() => CompradorEntity, comprador => comprador.comentarios)
    comprador: CompradorEntity;

}
