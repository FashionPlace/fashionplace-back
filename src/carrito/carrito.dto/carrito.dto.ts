import { IsNotEmpty, IsString } from "class-validator";
import { CompradorDto } from "src/comprador/comprador.dto/comprador.dto";

export class CarritoDto {

    @IsString()
    @IsNotEmpty()
    readonly fecha: Date;

    @IsNotEmpty()
    readonly compradro: CompradorDto;
}
