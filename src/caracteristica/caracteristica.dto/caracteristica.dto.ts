import { IsNotEmpty, IsString } from "class-validator";

export class CaracteristicaDto {
    
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly descripcion: string;
}
