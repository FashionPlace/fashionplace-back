import { IsNotEmpty, IsString } from "class-validator";

export class CarritoDto {

    @IsString()
    @IsNotEmpty()
    readonly fecha: Date;
}
