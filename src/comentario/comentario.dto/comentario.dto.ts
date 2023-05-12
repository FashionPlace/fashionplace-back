import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CompradorEntity } from "src/comprador/comprador.entity/comprador.entity";
import { ProductoEntity } from "src/producto/producto.entity/producto.entity";

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

    @IsNotEmpty()
    producto: ProductoEntity;

    @IsNotEmpty()
    comprador: CompradorEntity;
    
}
