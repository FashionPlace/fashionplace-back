import { IsNotEmpty, IsString } from "class-validator";
import { CarritoDto } from "src/carrito/carrito.dto/carrito.dto";
import { ImagenUsuarioDto } from "src/imagenUsuario/imagenUsuario.dto/imagenUsuario.dto";

export class CompradorDto {

    @IsNotEmpty()
    readonly carrito: CarritoDto;

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
