------------------------------------------------- DIRECCIONES USUARIO -------------------------------------------------

-- Direcciones de las empresa
insert into direccion_usuario_entity values ('0f5c9a1c-0b10-4cce-9ab4-a9bc9b984efe', 'Colombia', 'Medellin', 'Carrera 28 #385 -73', 'Torre 5 Apto 7');
insert into direccion_usuario_entity values ('983e85f7-cba6-484f-8b86-e2e0311ee97c', 'Colombia', 'Bogota', 'Carrera 30 #512 -54', 'Torre 3 Apto 4');
insert into direccion_usuario_entity values ('abfda454-da86-4210-b1e6-9c074b7be757', 'Colombia', 'Santa Marta', 'Carrera 67 #301 -63', 'Torre 2 Apto 7');
insert into direccion_usuario_entity values ('404ff002-6e92-4672-a18e-b51da9a9bf2b', 'Colombia', 'Cali', 'Carrera 25 #91 -85', 'Torre 5 Apto 9');

-- Direcciones de los clientes


-------------------------------------------------------- EMPRESAS ------------------------------------------------------
insert into empresa_entity values ('07f9d498-9411-4f25-9625-afdbfb6ebf9b', 'Estilo Elegante', 2986189, 'estiloelegante123', 'estiloelegante@gmail.com', 'estiloelegante@hotmail.com', 1061953, 'https://media.discordapp.net/attachments/1106667426915033199/1106669338955624489/Elegancia.jpg?width=671&height=671', 'Elegancia sofisticada para destacar en cualquier ocasión.', 'Plus', '0f5c9a1c-0b10-4cce-9ab4-a9bc9b984efe');
insert into empresa_entity values ('aac36853-5294-46b1-8ccb-6c1dd9a019ae', 'Moda Viva', 1211913, 'modaviva123', 'modaviva@gmail.com', 'modaviva@hotmail.com', 1764349, 'https://media.discordapp.net/attachments/1106667426915033199/1106669338188058737/Viva.jpg?width=671&height=671', 'Vibrante moda para expresar tu estilo único y vivo.', 'Premium', '983e85f7-cba6-484f-8b86-e2e0311ee97c');
insert into empresa_entity values ('41ef3d5a-f7de-4b8d-bb80-02a3945389ae', 'Ropa Unica', 1273038, 'ropaunica123', 'ropaunica@gmail.com', 'ropaunica@hotmail.com', 1069231, 'https://media.discordapp.net/attachments/1106667426915033199/1106669340310384680/Unica.jpg?width=671&height=671', 'Piezas de diseño exclusivas con detalles únicos y calidad.', 'Premium', 'abfda454-da86-4210-b1e6-9c074b7be757');
insert into empresa_entity values ('281e30ce-276b-44e9-8260-c71eeeecfb7b', 'Tienda Fashion', 7918042, 'tiendafashion123', 'tiendafashion@gmail.com', 'tiendafashion@hotmail.com', 3067568, 'https://media.discordapp.net/attachments/1106667426915033199/1106669339626721421/Fashion.jpg?width=671&height=671', 'La tienda de moda para estar a la última tendencia.', 'Basico', '404ff002-6e92-4672-a18e-b51da9a9bf2b');

-------------------------------------------------------- UBICACIONES SUCURSAL -------------------------------------------
insert into ubicacion_sucursal_entity values ('ddf435ab-cfd9-4246-901b-544714f1df0a', 'Colombia', 'Bogota', 'Calle 72 #10 -07', 'Chapinero');
insert into ubicacion_sucursal_entity values ('46927941-be30-4513-956d-3d9290d2757e', 'Colombia', 'Medellin', 'Calle 10 #32-45', 'El Poblado');
insert into ubicacion_sucursal_entity values ('0cd2d347-a3f8-4aeb-9745-c421e0d7f0f4', 'Colombia', 'Cali', 'Avenida Carrera 15 #93 -09', 'Chico');
insert into ubicacion_sucursal_entity values ('c7394a8c-c19b-458f-b395-022668f66d64', 'Colombia', 'Cali', 'Carrera 7 #32 -18', 'La Candelaria');
insert into ubicacion_sucursal_entity values ('e75ae637-3f7e-49c2-94aa-03f0a82d18e8', 'Colombia', 'Cali', 'Calle 100 #19A -54', 'Zona Rosa');

-------------------------------------------------------- SUCURSALES -----------------------------------------------------
insert into sucursal_entity values ('0083c2b7-b0b7-4cd4-ad74-8e74cd642416', '07f9d498-9411-4f25-9625-afdbfb6ebf9b', 'ddf435ab-cfd9-4246-901b-544714f1df0a');
insert into sucursal_entity values ('7810b2d4-d24a-41b8-955f-c62e3af9edd9', '07f9d498-9411-4f25-9625-afdbfb6ebf9b', '46927941-be30-4513-956d-3d9290d2757e');
insert into sucursal_entity values ('1334bed3-1bdf-47a7-bfcf-28d1ecfeb028', 'aac36853-5294-46b1-8ccb-6c1dd9a019ae', '0cd2d347-a3f8-4aeb-9745-c421e0d7f0f4');
insert into sucursal_entity values ('9ac4d994-c297-48ab-baf7-4522160ba55e', '41ef3d5a-f7de-4b8d-bb80-02a3945389ae', 'c7394a8c-c19b-458f-b395-022668f66d64');
insert into sucursal_entity values ('4bb9728c-cf4c-48b7-bc7b-0a175b144768', '281e30ce-276b-44e9-8260-c71eeeecfb7b', 'e75ae637-3f7e-49c2-94aa-03f0a82d18e8');

-------------------------------------------------------- PRODUCTOS ------------------------------------------------------
insert into producto_entity values ('0aba4c8b-feb2-4669-ae7b-d5a91004219a', 'Camiseta Deportiva Hombre', 'Ideal para el entrenamiento, esta camiseta de manga corta para hombres ofrece comodidad y estilo con su diseño deportivo y vibrantes colores.', 89000, 20, 0);
insert into producto_entity values ('24d2063d-44fe-42a6-a271-d53ea83c569e', 'Pantalón Vaquero Hombre', 'Con un ajuste ceñido y un clásico tono azul oscuro, este pantalón vaquero para hombres combina estilo y versatilidad para un look moderno y casual.', 179000, 15, 0);
insert into producto_entity values ('34ef7d9f-d71f-438f-a8a0-5c8b8cd1b6be', 'Blusa Estampada Mujer', 'Esta blusa de mujer presenta un diseño elegante con estampado y un cuello redondo, agregando un toque de estilo fresco y versátil en color blanco.', 119000, 3, 0);
insert into producto_entity values ('d605abc9-2212-489a-9a6f-230c93f0d096', 'Chaqueta Acolchada Mujer', 'Mantente abrigada y con estilo durante los días fríos con esta chaqueta acolchada para mujer. Cuenta con una capucha desmontable y su color morado combina fácilmente con cualquier atuendo.', 239000, 35, 0);
insert into producto_entity values ('ea29def7-b0f4-4fed-ba8a-551563cdecd2', 'Camisa Algodón Hombre', 'Esta camisa de vestir para hombre, confeccionada en algodón de alta calidad, presenta un elegante diseño negro, perfecta para ocasiones formales y casuales.', 149000, 11, 0);

-------------------------------------------------------- PRODUCTOS ------------------------------------------------------

insert into imagen_producto_entity values ('3e0aaa53-6843-49bc-84f6-098f65924686', 'https://media.discordapp.net/attachments/1107081638497767536/1107087548607635456/Camiseta_Deportiva_Blanca.jpg?width=662&height=662', '0aba4c8b-feb2-4669-ae7b-d5a91004219a');
insert into imagen_producto_entity values ('2a3341ad-a7aa-472c-9216-da1e0b1dfdd5', 'https://media.discordapp.net/attachments/1107081638497767536/1107087549324857464/Camiseta_Deportiva_Verde.jpg?width=662&height=662', '0aba4c8b-feb2-4669-ae7b-d5a91004219a');
insert into imagen_producto_entity values ('43aa005a-ed1c-4ece-80a3-60655271a6e4', 'https://media.discordapp.net/attachments/1107081638497767536/1107087550516043887/Pantalon_vaquero.jpg?width=662&height=662', '24d2063d-44fe-42a6-a271-d53ea83c569e');
insert into imagen_producto_entity values ('62f1b3d8-6d8e-41fc-9562-020671c08fdb', 'https://media.discordapp.net/attachments/1107081638497767536/1107087547684884621/Blusa_Mujer.jpg?width=662&height=662', '34ef7d9f-d71f-438f-a8a0-5c8b8cd1b6be');
insert into imagen_producto_entity values ('5dfe1b0d-d6ab-4b32-8eaa-437b3bb81c8a', 'https://media.discordapp.net/attachments/1107081638497767536/1107087550125981757/Chaqueta_Acolchada.jpg?width=662&height=662', 'd605abc9-2212-489a-9a6f-230c93f0d096');
insert into imagen_producto_entity values ('cbe33e94-7e59-4707-a739-1afbbad748de', 'https://media.discordapp.net/attachments/1107081638497767536/1107087548167241789/Camisa_Algodon.jpg?width=662&height=662', 'ea29def7-b0f4-4fed-ba8a-551563cdecd2');

-------------------------------------------------------- PRODUCTOS SUCURSALES ------------------------------------------------------
insert into producto_entity_sucursales_sucursal_entity values ('0aba4c8b-feb2-4669-ae7b-d5a91004219a', '0083c2b7-b0b7-4cd4-ad74-8e74cd642416');
insert into producto_entity_sucursales_sucursal_entity values ('24d2063d-44fe-42a6-a271-d53ea83c569e', '7810b2d4-d24a-41b8-955f-c62e3af9edd9');
insert into producto_entity_sucursales_sucursal_entity values ('34ef7d9f-d71f-438f-a8a0-5c8b8cd1b6be', '1334bed3-1bdf-47a7-bfcf-28d1ecfeb028');
insert into producto_entity_sucursales_sucursal_entity values ('d605abc9-2212-489a-9a6f-230c93f0d096', '9ac4d994-c297-48ab-baf7-4522160ba55e');
insert into producto_entity_sucursales_sucursal_entity values ('ea29def7-b0f4-4fed-ba8a-551563cdecd2', '4bb9728c-cf4c-48b7-bc7b-0a175b144768');