import { IsNotEmpty, IsString } from "class-validator";

export class CompradorDto {

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

}
