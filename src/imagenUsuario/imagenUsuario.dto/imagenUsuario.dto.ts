/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { UsuarioDto } from "src/usuario/usuario.dto/usuario.dto";

export class ImagenUsuarioDto {

    @IsNotEmpty()
    @IsString()
    readonly url: string;

    @IsNotEmpty()
    readonly usuario: UsuarioDto;

}
