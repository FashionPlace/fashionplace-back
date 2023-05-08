import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CompraDto } from "src/compra/compra.dto/compra.dto";
import { ProductoDto } from "src/producto/producto.dto/producto.dto";

export class ComentarioDto {

    @IsNotEmpty()
    @IsString()
    readonly titulo: number;
    
    @IsNotEmpty()
    @IsDateString()
    readonly fecha: Date;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;
    
    @IsNotEmpty()
    @IsNumber()
    readonly calificacion: number;

    @IsNotEmpty()
    readonly producto: ProductoDto

    @IsNotEmpty()
    readonly comprador: CompraDto

}
