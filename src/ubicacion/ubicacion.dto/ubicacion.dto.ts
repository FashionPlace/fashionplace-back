/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class UbicacionDto {
    
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
}
