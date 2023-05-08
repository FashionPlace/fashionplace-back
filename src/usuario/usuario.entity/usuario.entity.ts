import { ImagenUsuarioEntity } from 'src/imagenUsuario/imagenUsuario.entity/imagenUsuario.entity';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

}
