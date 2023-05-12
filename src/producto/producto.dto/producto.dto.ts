/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ImagenProductoEntity } from "src/imagenProducto/imagenProducto.entity/imagenProducto.entity";
import { SucursalEntity } from "src/sucursal/sucursal.entity/sucursal.entity";

export class ProductoDto {

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    readonly precio: number;
    
    @IsNotEmpty()
    @IsNumber()
    readonly unidadesDisponibles: number;

    @IsNotEmpty()
    readonly sucursales: SucursalEntity[];

    @IsNotEmpty()
    readonly imagenes: ImagenProductoEntity[];
    
    @IsNumber()
    @IsOptional()
    readonly descuento: number;
    
}
