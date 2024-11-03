/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty } from "class-validator";
import { CompradorEntity } from "src/comprador/comprador.entity/comprador.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";

export class VisitaDto {
    
    @IsNotEmpty()
    @IsDateString()
    readonly fecha: string;
    
    @IsNotEmpty()
    comprador: CompradorEntity;

    @IsNotEmpty()
    producto: ProductoEntity;
}
