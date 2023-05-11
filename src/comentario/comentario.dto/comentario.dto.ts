import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ComentarioDto {

    @IsNotEmpty()
    @IsString()
    readonly titulo: string;
    
    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    readonly fecha: Date;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;
    
    @IsNotEmpty()
    @IsNumber()
    readonly calificacion: number;

}
