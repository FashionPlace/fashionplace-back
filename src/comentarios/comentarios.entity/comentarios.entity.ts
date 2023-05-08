import { CompradorEntity } from "src/comprador/comprador.entity/comprador.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ComentariosEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    comentario: string;
    
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
