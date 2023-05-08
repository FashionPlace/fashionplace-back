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
import { ComentariosModule } from './comentarios/comentarios.module';
import { ColeccionesModule } from './colecciones/colecciones.module';
import { CaracteristicasModule } from './caracteristicas/caracteristicas.module';
import { TagModule } from './tag/tag.module';
import { CarritoModule } from './carrito/carrito.module';
import { CarritoProductoModule } from './carritoProducto/carritoPoducto.module';
import { CompraProductoModule } from './compra-producto/compra-producto.module';
import { VisitaModule } from './visita/visita.module';
import { CompraModule } from './compra/compra.module';
import { CompradorModule } from './comprador/comprador.module';
import { GraficaModule } from './grafica/grafica.module';
import { ImagenProductoModule } from './imagen-producto/imagen-producto.module';

@Module({
  imports: [UbicacionModule, UsuarioModule, EmpresaModule, SucursalModule, MetodoContactoModule, ImagenModule, ProductoModule, ComentariosModule, ColeccionesModule, CaracteristicasModule, TagModule, CarritoModule, CarritoProductoModule, CompraProductoModule, VisitaModule, CompraModule, CompradorModule, GraficaModule, ImagenproductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
