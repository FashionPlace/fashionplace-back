/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { EmpresaDto } from "src/empresa/empresa.dto/empresa.dto";
import { UbicacionSucursalDto } from "src/ubicacionSucursal/ubicacionSucursal.dto/ubicacionSucursal.dto";

export class SucursalDto {

    @IsNotEmpty()
    readonly empresa: EmpresaDto;

    @IsNotEmpty()
    readonly ubicacion: UbicacionSucursalDto;

}
