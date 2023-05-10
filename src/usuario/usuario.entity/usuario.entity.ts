import { DireccionUsuarioEntity } from 'src/direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';
import { ImagenUsuarioEntity } from 'src/imagenUsuario/imagenUsuario.entity/imagenUsuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
    
    @OneToOne(() => ImagenUsuarioEntity, imagenUsuario => imagenUsuario.usuario)
    @JoinColumn()
    imagen: ImagenUsuarioEntity;

    @ManyToOne(() => DireccionUsuarioEntity, direccionUsuario => direccionUsuario.usuarios)
    direccion: DireccionUsuarioEntity;

}
