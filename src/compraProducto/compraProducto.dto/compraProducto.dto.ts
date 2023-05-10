import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CompraDto } from "src/compra/compra.dto/compra.dto";
import { ProductoDto } from "src/producto/producto.dto/producto.dto";

export class CompraProductoDto {

    @IsNotEmpty()
    @IsNumber()
    readonly cantidad: number;
    
    @IsNotEmpty()
    @IsString()
    readonly talla: string;

    @IsNotEmpty()
    @IsNumber()
    readonly precio: number;

}
