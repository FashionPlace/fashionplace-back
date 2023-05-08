import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { MetodoContactoModule } from './metodo-contacto/metodo-contacto.module';
import { ImagenModule } from './imagen/imagen.module';
import { ProductoModule } from './producto/producto.module';
import { ComentarioModule } from './comentario/comentario.module';
import { ColeccionesModule } from './coleccion/coleccion.module';
import { CaracteristicaModule } from './caracteristica/caracteristica.module';
import { TagModule } from './tag/tag.module';
import { CarritoModule } from './carrito/carrito.module';
import { CarritoProductoModule } from './carritoProducto/carritoPoducto.module';
import { CompraProductoModule } from './compra-producto/compra-producto.module';
import { VisitaModule } from './visita/visita.module';
import { CompraModule } from './compra/compra.module';
import { CompradorModule } from './comprador/comprador.module';
import { GraficaModule } from './grafica/grafica.module';
import { ImagenColeccionModule } from './imagenColeccion/imagenColeccion.module';
import { ImagenProductoModule } from './imagenProducto/imagenProducto.module';
import { ImagenUsuarioModule } from './imagenUsuario/imagenUsuario.module';
import { UbicacionSucursalModule } from './ubicacionSucursal/ubicacionSucursal.module';

@Module({
  imports: [UbicacionModule, UsuarioModule, EmpresaModule, SucursalModule, MetodoContactoModule, ProductoModule, ComentarioModule, ColeccionesModule, CaracteristicaModule, TagModule, CarritoModule, CarritoProductoModule, CompraProductoModule, VisitaModule, CompraModule, CompradorModule, GraficaModule, ImagenModule, ImagenProductoModule, ImagenColeccionModule, ImagenUsuarioModule, UbicacionSucursalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
