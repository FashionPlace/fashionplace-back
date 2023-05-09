/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { EmpresaDto } from "src/empresa/empresa.dto/empresa.dto";

export class MetodoContactoDto {

    @IsNotEmpty()
    @IsString()
    readonly tipo: string;
    
    @IsNotEmpty()
    @IsString()
    readonly enlace: string;
    
    @IsNotEmpty()
    @IsNumber()
    readonly logo: number;
    
    @IsNotEmpty()
    readonly empresa: EmpresaDto;
}
