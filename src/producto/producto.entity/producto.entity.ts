/* eslint-disable prettier/prettier */
import { CaracteristicaEntity } from 'src/caracteristica/caracteristica.entity/caracteristica.entity';
import { CarritoProductoEntity } from 'src/carritoProducto/carritoProducto.entity/carritoProducto.entity';
import { ColeccionEntity } from 'src/coleccion/coleccion.entity/coleccion.entity';
import { ComentarioEntity } from 'src/comentario/comentario.entity/comentario.entity';
import { CompraProductoEntity } from 'src/compraProducto/compraProducto.entity/compraProducto.entity';
import { ImagenProductoEntity } from 'src/imagenProducto/imagenProducto.entity/imagenProducto.entity';
import { SucursalEntity } from 'src/sucursal/sucursal.entity/sucursal.entity';
import { VisitaEntity } from 'src/visita/visita.entity/visita.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    precio: number;

    @Column()
    unidadesDisponibles: number;

    @Column()
    descuento: number;

    @ManyToMany(() => SucursalEntity, sucursal => sucursal.productos)
    @JoinTable()
    sucursales: SucursalEntity[];

    @OneToMany(() => CarritoProductoEntity, carritoProducto => carritoProducto.producto)
    carritoProductos: CarritoProductoEntity[];

    @OneToMany(() => CompraProductoEntity, compraProducto => compraProducto.producto)
    compraProductos: CompraProductoEntity[];

    @OneToMany(() => VisitaEntity, visita => visita.producto)
    visitas: VisitaEntity[];

    @OneToMany(() => ImagenProductoEntity, imagenProducto => imagenProducto.producto)
    imagenes: ImagenProductoEntity[];
    
    @OneToMany(() => ComentarioEntity, comentario => comentario.producto)
    comentarios: ComentarioEntity[];

    @ManyToMany(() => ColeccionEntity, coleccion => coleccion.productos)
    @JoinTable()
    colecciones: ColeccionEntity[];

    @ManyToMany(() => CaracteristicaEntity, caracteristica => caracteristica.productos)
    @JoinTable()
    caracteristicas: CaracteristicaEntity[];

}
