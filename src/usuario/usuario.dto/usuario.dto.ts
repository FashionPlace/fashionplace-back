/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { DireccionUsuarioDto } from "src/direccionUsuario/direccionUsuario.dto/direccionUsuario.dto";

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
    @IsUrl()
    readonly foto: string;

    @IsNotEmpty()
    readonly direccion: DireccionUsuarioDto;

}
