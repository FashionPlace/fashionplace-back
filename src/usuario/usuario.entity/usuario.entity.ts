import { DireccionUsuarioEntity } from 'src/direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    nombre: string;

    @Column()
    documento: string;

    @Column()
    contrasenia: string;

    @Column()
    email: string;

    @Column()
    emailRespaldo: string;

    @Column()
    celular: string;

    @Column()
    foto: string;

    @ManyToOne(() => DireccionUsuarioEntity, direccionUsuario => direccionUsuario.usuarios)
    direccion: DireccionUsuarioEntity;

}
