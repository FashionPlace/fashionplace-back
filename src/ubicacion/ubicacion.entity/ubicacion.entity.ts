import { SucursalEntity } from 'src/sucursal/sucursal.entity/sucursal.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UbicacionEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    pais: string;

    @Column()
    ciudad: string;

    @Column()
    direccion: string;

    @Column()
    adicional: string;

}
