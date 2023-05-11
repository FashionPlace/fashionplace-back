/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class EmpresaDto {
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly documento: string;
    
    @IsNotEmpty()
    @IsString()
    readonly contrasenia: string;
    
    @IsNotEmpty()
    @IsString()
    readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    readonly emailRespaldo: string;
    
    @IsNotEmpty()
    @IsString()
    readonly celular: string;

    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    @IsString()
    readonly plan: string;

    @IsNotEmpty()
    @IsUrl()
    readonly foto: string;

}
