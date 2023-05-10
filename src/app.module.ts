import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { MetodoContactoModule } from './metodoContacto/metodoContacto.module';
import { ImagenModule } from './imagen/imagen.module';
import { ProductoModule } from './producto/producto.module';
import { ComentarioModule } from './comentario/comentario.module';
import { ColeccionModule } from './coleccion/coleccion.module';
import { CaracteristicaModule } from './caracteristica/caracteristica.module';
import { TagModule } from './tag/tag.module';
import { CarritoModule } from './carrito/carrito.module';
import { CarritoProductoModule } from './carritoProducto/carritoPoducto.module';
import { CompraProductoModule } from './compraProducto/compraProducto.module';
import { VisitaModule } from './visita/visita.module';
import { CompraModule } from './compra/compra.module';
import { CompradorModule } from './comprador/comprador.module';
import { GraficaModule } from './grafica/grafica.module';
import { ImagenColeccionModule } from './imagenColeccion/imagenColeccion.module';
import { ImagenProductoModule } from './imagenProducto/imagenProducto.module';
import { ImagenUsuarioModule } from './imagenUsuario/imagenUsuario.module';
import { UbicacionSucursalModule } from './ubicacionSucursal/ubicacionSucursal.module';
import { DireccionUsuarioModule } from './direccionUsuario/direccionUsuario.module';
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
import { ImagenColeccionEntity } from 'src/imagenColeccion/imagenColeccion.entity/imagenColeccion.entity';
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

@Module({
  imports: [
    UbicacionModule,
    DireccionUsuarioModule,
    UsuarioModule,
    EmpresaModule,
    SucursalModule,
    MetodoContactoModule,
    ProductoModule,
    ComentarioModule,
    ColeccionModule,
    CaracteristicaModule,
    TagModule, 
    CarritoModule, 
    CarritoProductoModule, 
    CompraProductoModule, 
    VisitaModule,
    CompraModule, 
    CompradorModule, 
    GraficaModule, 
    ImagenModule, 
    ImagenProductoModule, 
    ImagenColeccionModule, 
    ImagenUsuarioModule,
    UbicacionSucursalModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'fashionPlace',
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
        ImagenColeccionEntity,
        ImagenUsuarioEntity,
        UbicacionSucursalEntity
      ],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
