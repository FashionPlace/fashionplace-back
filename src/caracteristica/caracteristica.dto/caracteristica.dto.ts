import { IsNotEmpty, IsString } from "class-validator";

export class CaracteristicasDto {
    
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly descripcion: string;
}
