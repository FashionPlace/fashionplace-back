import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CarritoProductoEntity } from "src/carritoProducto/carritoProducto.entity/carritoProducto.entity";
import { CompradorEntity } from "src/comprador/comprador.entity/comprador.entity";

@Entity()
export class CarritoEntity {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fecha: Date;

    @OneToMany(() => CarritoProductoEntity, carritoProducto => carritoProducto.carrito)
    carritoProductos: CarritoProductoEntity[];

    @OneToOne(() => CompradorEntity, comprador => comprador.carrito)
    comprador: CompradorEntity;

}
