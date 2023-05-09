/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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
    
    @IsNotEmpty()
    @IsNumber()
    readonly descuento: number;

}
