/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { SucursalDto } from "src/sucursal/sucursal.dto/sucursal.dto";

export class UbicacionSucursalDto {
    @IsNotEmpty()
    @IsString()
    readonly pais: string;
    
    @IsNotEmpty()
    @IsString()
    readonly ciudad: string;
    
    @IsNotEmpty()
    @IsString()
    readonly direccion: string;
    
    @IsNotEmpty()
    @IsString()
    readonly adicional: string;

    @IsNotEmpty()
    readonly sucursal: SucursalDto;
}
