import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";

export class ColeccionDto {

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    @IsUrl()
    readonly imagen: string;

    @IsNotEmpty()
    productos: ProductoEntity[];

}
