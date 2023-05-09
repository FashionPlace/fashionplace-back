/* eslint-disable prettier/prettier */
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class DireccionUsuarionEntity extends UbicacionEntity {
    
  @OneToMany(() => UsuarioEntity, usuario => usuario.direccion)
  usuarios: UsuarioEntity;

}
