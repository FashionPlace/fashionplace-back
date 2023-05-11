/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

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
    
}
