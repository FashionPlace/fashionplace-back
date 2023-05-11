/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { EmpresaDto } from "src/empresa/empresa.dto/empresa.dto";
import { UbicacionDto } from "src/ubicacion/ubicacion.dto/ubicacion.dto";

export class SucursalDto {

    @IsNotEmpty()
    empresa: EmpresaDto;

    @IsNotEmpty()
    ubicacion: UbicacionDto;

}
