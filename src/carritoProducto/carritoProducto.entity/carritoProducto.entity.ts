import { CarritoEntity } from "src/carrito/carrito.entity/carrito.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CarritoProductoEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    cantidad: number;
    
    @Column()
    talla: string;

    @Column()
    precio: number;
    
    @ManyToOne(() => CarritoEntity, carrito => carrito.carritoProductos)
    compra: CarritoEntity;
    
    @ManyToMany(() => ProductoEntity, producto => producto.carritoProductos)
    producto: ProductoEntity[];
}
