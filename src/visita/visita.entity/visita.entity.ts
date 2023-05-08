import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VisitaEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    fecha: Date;

    @ManyToOne(() => CompradorEntity, comprador => comprador.visitas)
    comprador: CompradorEntity;

    @ManyToOne(() => ProductoEntity, producto => producto.visitas)
    producto: ProductoEntity;

}
