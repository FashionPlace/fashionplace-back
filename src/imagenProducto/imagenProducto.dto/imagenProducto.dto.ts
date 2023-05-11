/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class ImagenProductoDto {
    @IsNotEmpty()
    @IsString()
    readonly url: string;

}
