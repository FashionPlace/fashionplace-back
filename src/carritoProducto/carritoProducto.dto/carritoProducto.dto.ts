import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CarritoProductoDto {
    @IsNotEmpty()
    @IsNumber()
    readonly cantidad: number;
    
    @IsNotEmpty()
    @IsString()
    readonly talla: string;

    @IsNotEmpty()
    @IsNumber()
    readonly precio: number;

    @IsNotEmpty()
    readonly carrito: CarritoProductoDto
}
