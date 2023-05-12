/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { EmpresaEntity } from "src/empresa/empresa.entity/empresa.entity";

export class MetodoContactoDto {

    @IsNotEmpty()
    @IsString()
    readonly tipo: string;
    
    @IsNotEmpty()
    @IsString()
    readonly enlace: string;
    
    @IsNotEmpty()
    @IsString()
    readonly logo: number;

    @IsNotEmpty()
    empresa: EmpresaEntity;
    
}
