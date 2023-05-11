/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class GraficaDto {

    @IsNotEmpty()
    @IsString()
    readonly url: string;

}
