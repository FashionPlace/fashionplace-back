import { IsNotEmpty, IsString } from "class-validator";

export class ColeccionDto {

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

}
