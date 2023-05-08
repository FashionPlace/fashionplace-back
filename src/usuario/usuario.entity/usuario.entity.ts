import { DireccionUsuarionEntity } from 'src/direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';
import { ImagenUsuarioEntity } from 'src/imagenUsuario/imagenUsuario.entity/imagenUsuario.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

    @OneToMany(() => DireccionUsuarionEntity, direccionUsuario => direccionUsuario.usuario)
    direccion: DireccionUsuarionEntity[];

}
