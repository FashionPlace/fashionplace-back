import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MetodoContactoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    tipo: string;

    @Column()
    enlace: string;

    @Column()
    logo: string;

    @ManyToOne(() => EmpresaEntity, empresa => empresa.metodosContacto)
    empresa: EmpresaEntity;

}
