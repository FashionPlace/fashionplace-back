import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CarritoEntity } from "src/carrito/carrito.entity/carrito.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";

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
    carrito: CarritoEntity;
    
    @IsNotEmpty()
    producto: ProductoEntity;

}
