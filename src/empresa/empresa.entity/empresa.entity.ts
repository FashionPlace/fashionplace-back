import { GraficaEntity } from "src/grafica/grafica.entity/grafica.entity";
import { SucursalEntity } from "src/sucursal/sucursal.entity/sucursal.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity/usuario.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class EmpresaEntity extends UsuarioEntity{

    @Column()
    descripcion: string;

    @Column()
    plan: string;

    @OneToMany(() => SucursalEntity, sucursal => sucursal.empresa)
    sucursales: SucursalEntity[];

    @OneToMany(() => GraficaEntity, grafica => grafica.empresa)
    graficas: GraficaEntity[];

}
