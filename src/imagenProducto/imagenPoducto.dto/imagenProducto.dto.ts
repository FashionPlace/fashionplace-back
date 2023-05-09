/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ProductoDto } from "src/producto/producto.dto/producto.dto";

export class ImagenProductoDto {

    @IsNotEmpty()
    @IsString()
    readonly url: string;

    @IsNotEmpty()
    readonly producto: ProductoDto;

}
