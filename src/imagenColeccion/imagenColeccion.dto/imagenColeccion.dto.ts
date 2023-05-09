/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ColeccionDto } from "src/coleccion/coleccion.dto/coleccion.dto";

export class ImagenColeccionDto {
    @IsNotEmpty()
    @IsString()
    readonly url: string;

    @IsNotEmpty()
    readonly coleccion: ColeccionDto
}
