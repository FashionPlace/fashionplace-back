import { CompraProductoEntity } from "src/compra-producto/compra-producto.entity/compra-producto.entity";
import { CompradorEntity } from "src/comprador/comprador.entity/comprador.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CompraEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fecha: Date;

    @ManyToOne(() => CompradorEntity, comprador => comprador.compras)
    comprador: CompradorEntity;

    @OneToMany(() => CompraProductoEntity, compraProd => compraProd.compra)
    compraProductos: CompraProductoEntity[];

}
