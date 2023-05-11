/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ProductoDto {

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    readonly precio: number;
    
    @IsNotEmpty()
    @IsNumber()
    readonly unidadesDisponibles: number;
    
    @IsNumber()
    @IsOptional()
    readonly descuento: number;

}
