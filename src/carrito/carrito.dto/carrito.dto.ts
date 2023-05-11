import { Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

export class CarritoDto {

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    readonly fecha: Date;

}
