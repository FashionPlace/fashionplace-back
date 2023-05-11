/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty } from "class-validator";
import { CompradorDto } from "src/comprador/comprador.dto/comprador.dto";
import { ProductoDto } from "src/producto/producto.dto/producto.dto";

export class VisitaDto {
    
    @IsNotEmpty()
    @IsDateString()
    readonly fecha: string;
    
}
