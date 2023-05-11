import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class ColeccionDto {

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    @IsUrl()
    readonly imagen: string;

}
