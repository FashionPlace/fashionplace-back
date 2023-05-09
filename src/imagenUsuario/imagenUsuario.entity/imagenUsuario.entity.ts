/* eslint-disable prettier/prettier */
import { ImagenEntity } from "src/imagen/imagen.entity/imagen.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity/usuario.entity";
import { Entity, OneToOne } from "typeorm";

@Entity()
export class ImagenUsuarioEntity extends ImagenEntity {

    @OneToOne(() => UsuarioEntity, usuario => usuario.imagen)
    usuario: UsuarioEntity;

}
