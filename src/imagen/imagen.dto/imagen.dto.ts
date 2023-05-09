/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class ImagenDto {

    @IsNotEmpty()
    @IsString()
    readonly url: string;
    
}
