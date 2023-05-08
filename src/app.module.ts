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
import { CarritoProductoModule } from './carrito-producto/carrito-producto.module';
import { CompraProductoModule } from './compra-producto/compra-producto.module';
import { VisitaModule } from './visita/visita.module';
import { CompraModule } from './compra/compra.module';
import { CompradorModule } from './comprador/comprador.module';
import { CarritpService } from './carritp/carritp.service';

@Module({
  imports: [UbicacionModule, UsuarioModule, EmpresaModule, SucursalModule, MetodoContactoModule, ImagenModule, ProductoModule, ComentariosModule, ColeccionesModule, CaracteristicasModule, TagModule, CarritoModule, CarritoProductoModule, CompraProductoModule, VisitaModule, CompraModule, CompradorModule],
  controllers: [AppController],
  providers: [AppService, CarritpService],
})
export class AppModule {}
