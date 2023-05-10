import { IsDateString, IsNotEmpty } from "class-validator";
import { CompradorDto } from "src/comprador/comprador.dto/comprador.dto";

export class CompraDto {

    @IsNotEmpty()
    @IsDateString()
    readonly fecha: Date;

}
