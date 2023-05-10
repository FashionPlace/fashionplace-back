/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { EmpresaDto } from "src/empresa/empresa.dto/empresa.dto";

export class GraficaDto {

    @IsNotEmpty()
    @IsString()
    readonly url: string;

}
