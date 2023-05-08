import { SucursalEntity } from 'src/sucursal/sucursal.entity/sucursal.entity';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
export class DireccionUsuarionEntity extends UbicacionEntity {

    @ManyToOne(() => UsuarioEntity, usuario => usuario.direccion)
    usuario: UsuarioEntity;

}
