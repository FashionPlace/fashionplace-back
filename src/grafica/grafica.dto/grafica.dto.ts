/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { EmpresaEntity } from "src/empresa/empresa.entity/empresa.entity";

export class GraficaDto {

    @IsNotEmpty()
    @IsString()
    readonly url: string;

    @IsNotEmpty()
    empresa: EmpresaEntity;

}
