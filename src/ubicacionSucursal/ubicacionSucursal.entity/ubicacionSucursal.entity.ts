import { SucursalEntity } from "src/sucursal/sucursal.entity/sucursal.entity";
import { UbicacionEntity } from "src/ubicacion/ubicacion.entity/ubicacion.entity";
import { Entity, OneToOne } from "typeorm";

@Entity()
export class UbicacionSucursalEntity extends UbicacionEntity{

    @OneToOne(() => SucursalEntity, Sucursal => Sucursal.ubicacion)
    sucursal: SucursalEntity;

}
