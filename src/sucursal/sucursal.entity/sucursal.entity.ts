import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';
import { Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SucursalEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => EmpresaEntity, empresa => empresa.sucursales)
    empresa: EmpresaEntity;

    @ManyToMany(() => ProductoEntity, producto => producto.sucursales)
    productos: ProductoEntity[];
    
}
