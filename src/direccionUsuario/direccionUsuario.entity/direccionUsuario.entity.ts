/* eslint-disable prettier/prettier */
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class DireccionUsuarioEntity extends UbicacionEntity {
    
  @OneToMany(() => UsuarioEntity, usuario => usuario.direccion)
  usuarios: UsuarioEntity[];

}
