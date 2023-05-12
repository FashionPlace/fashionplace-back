/* eslint-disable prettier/prettier */
import { CarritoEntity } from "src/carrito/carrito.entity/carrito.entity";
import { ComentarioEntity } from "src/comentario/comentario.entity/comentario.entity";
import { CompraEntity } from "src/compra/compra.entity/compra.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity/usuario.entity";
import { VisitaEntity } from "src/visita/visita.entity/visita.entity";
import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class CompradorEntity extends UsuarioEntity{

    @OneToMany(() => CompraEntity, compra => compra.comprador)
    compras: CompraEntity[];

    @OneToOne(() => CarritoEntity, carrito => carrito.comprador)
    @JoinColumn()
    carrito: CarritoEntity;

    @OneToMany(() => VisitaEntity, visita => visita.comprador)
    visitas: VisitaEntity[];

    @OneToMany(() => ComentarioEntity, comentarios => comentarios.comprador)
    comentarios: ComentarioEntity[];

}
