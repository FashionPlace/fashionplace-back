import { EmpresaEntity } from "src/empresa/empresa.entity/empresa.entity";
import { ImagenEntity } from "src/imagen/imagen.entity/imagen.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity()
export class GraficaEntity extends ImagenEntity{

    @ManyToOne(() => EmpresaEntity, empresa => empresa.graficas)
    empresa: EmpresaEntity;

}
