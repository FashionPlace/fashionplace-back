/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ImagenUsuarioDto } from "src/imagenUsuario/imagenUsuario.dto/imagenUsuario.dto";

export class UsuarioDto {
    
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
    readonly imagen: ImagenUsuarioDto;
}
