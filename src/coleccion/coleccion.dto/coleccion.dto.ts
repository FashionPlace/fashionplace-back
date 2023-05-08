import { IsNotEmpty, IsString } from "class-validator";
import { ImagenColeccionDto } from "src/imagenColeccion/imagenColeccion.dto/imagenColeccion.dto";

export class ColeccionDto {

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    readonly imagen: ImagenColeccionDto;

}
