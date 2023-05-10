import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CompradorDto } from "src/comprador/comprador.dto/comprador.dto";
import { ProductoDto } from "src/producto/producto.dto/producto.dto";

export class ComentarioDto {

    @IsNotEmpty()
    @IsString()
    readonly titulo: string;
    
    @IsNotEmpty()
    @IsDateString()
    readonly fecha: Date;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;
    
    @IsNotEmpty()
    @IsNumber()
    readonly calificacion: number;

}
