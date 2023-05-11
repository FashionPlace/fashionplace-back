/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaracteristicaEntity } from 'src/caracteristica/caracteristica.entity/caracteristica.entity';
import { CarritoEntity } from 'src/carrito/carrito.entity/carrito.entity';
import { CarritoProductoEntity } from 'src/carritoProducto/carritoProducto.entity/carritoProducto.entity';
import { ColeccionEntity } from 'src/coleccion/coleccion.entity/coleccion.entity';
import { ComentarioEntity } from 'src/comentario/comentario.entity/comentario.entity';
import { CompraProductoEntity } from 'src/compraProducto/compraProducto.entity/compraProducto.entity';
import { CompraEntity } from 'src/compra/compra.entity/compra.entity';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';
import { DireccionUsuarioEntity } from 'src/direccionUsuario/direccionUsuario.entity/direccionUsuario.entity';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';
import { GraficaEntity } from 'src/grafica/grafica.entity/grafica.entity';
import { ImagenEntity } from 'src/imagen/imagen.entity/imagen.entity';
import { ImagenProductoEntity } from 'src/imagenProducto/imagenProducto.entity/imagenProducto.entity';
import { ImagenUsuarioEntity } from 'src/imagenUsuario/imagenUsuario.entity/imagenUsuario.entity';
import { MetodoContactoEntity } from 'src/metodoContacto/metodoContacto.entity/metodoContacto.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';
import { SucursalEntity } from 'src/sucursal/sucursal.entity/sucursal.entity';
import { TagEntity } from 'src/tag/tag.entity/tag.entity';
import { UbicacionEntity } from 'src/ubicacion/ubicacion.entity/ubicacion.entity';
import { UbicacionSucursalEntity } from 'src/ubicacionSucursal/ubicacionSucursal.entity/ubicacionSucursal.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { VisitaEntity } from 'src/visita/visita.entity/visita.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [
      UbicacionEntity,
      DireccionUsuarioEntity,
      UsuarioEntity,
      EmpresaEntity,
      SucursalEntity,
      MetodoContactoEntity,
      ProductoEntity,
      ComentarioEntity,
      ColeccionEntity,
      CaracteristicaEntity,
      TagEntity,
      CarritoEntity,
      CarritoProductoEntity,
      CompraProductoEntity,
      VisitaEntity,
      CompraEntity,
      CompradorEntity,
      GraficaEntity,
      ImagenEntity,
      ImagenProductoEntity,
      ImagenUsuarioEntity,
      UbicacionSucursalEntity
    ],
    synchronize: true,
    keepConnectionAlive: true
  }),
  TypeOrmModule.forFeature([
    UbicacionEntity,
    DireccionUsuarioEntity,
    UsuarioEntity,
    EmpresaEntity,
    SucursalEntity,
    MetodoContactoEntity,
    ProductoEntity,
    ComentarioEntity,
    ColeccionEntity,
    CaracteristicaEntity,
    TagEntity,
    CarritoEntity,
    CarritoProductoEntity,
    CompraProductoEntity,
    VisitaEntity,
    CompraEntity,
    CompradorEntity,
    GraficaEntity,
    ImagenEntity,
    ImagenProductoEntity,
    ImagenUsuarioEntity,
    UbicacionSucursalEntity]),
];
