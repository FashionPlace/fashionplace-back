/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class ImagenColeccionDto {
    @IsNotEmpty()
    @IsString()
    readonly url: string;

}
