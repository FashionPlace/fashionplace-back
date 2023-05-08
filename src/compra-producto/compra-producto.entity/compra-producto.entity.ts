import { CompraEntity } from "src/compra/compra.entity/compra.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CompraProductoEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    cantidad: number;

    @Column()
    talla: string;

    @Column()
    precio: number;

    @ManyToOne(() => CompraEntity, compra => compra.compraProductos)
    compra: CompraEntity;

    @ManyToOne(() => ProductoEntity, producto => producto.compraProductos)
    producto: ProductoEntity;

}
