const imagenes = import.meta.glob(
  '../components/image/productos/*',
  {
    eager: true,
    import: 'default'
  }
)

const products = [
  // ========== LIMPIEZA ==========
  // Subcategoría: Limpieza General
  { id: 1, name: 'Escoba clásica', price: 24000, image: imagenes['../components/image/productos/escoba.jpeg'], description: 'Escoba resistente para uso doméstico.', categoria: 'Limpieza', subcategoria: 'Limpieza General' },
  { id: 2, name: 'Detergente concentrado', price: 14000, image: imagenes['../components/image/productos/detergente.jpeg'], description: 'Limpieza profunda y ahorro.', categoria: 'Limpieza', subcategoria: 'Limpieza General' },
  { id: 5, name: 'Paño de microfibra', price: 10000, image: imagenes['../components/image/productos/paño.jpeg'], description: 'Ideal para limpieza sin rayas.', categoria: 'Limpieza', subcategoria: 'Limpieza General' },
  
  // Subcategoría: Desinfectantes
  { id: 9, name: 'Cloro desinfectante', price: 9000, image: imagenes['../components/image/productos/cloro.jpeg'], description: 'Desinfectante potente y económico.', categoria: 'Limpieza', subcategoria: 'Desinfectantes' },
  { id: 19, name: 'Spray desinfectante 500ml', price: 12000, image: imagenes['../components/image/productos/spray-desinfectante.jpeg'], description: 'Spray desinfectante para superficies.', categoria: 'Limpieza', subcategoria: 'Desinfectantes' },
  { id: 20, name: 'Desinfectante en polvo', price: 8000, image: imagenes['../components/image/productos/desinfectante-polvo.jpeg'], description: 'Desinfectante en polvo de uso múltiple.', categoria: 'Limpieza', subcategoria: 'Desinfectantes' },
  
  // Subcategoría: Protección
  { id: 8, name: 'Guantes de limpieza', price: 12000, image: imagenes['../components/image/productos/guantes.jpeg'], description: 'Protección cómoda y duradera.', categoria: 'Limpieza', subcategoria: 'Protección' },
  { id: 10, name: 'Jabón líquido', price: 17000, image: imagenes['../components/image/productos/jabon.jpeg'], description: 'Jabón suave para manos y superficies.', categoria: 'Limpieza', subcategoria: 'Protección' },
  { id: 21, name: 'Mascarilla protectora (10 unidades)', price: 15000, image: imagenes['../components/image/productos/mascarillas.jpeg'], description: 'Mascarillas protectoras reutilizables.', categoria: 'Limpieza', subcategoria: 'Protección' },

  // ========== PAPELERÍA ==========
  // Subcategoría: Cuadernos
  { id: 3, name: 'Cuaderno rayado 100 hojas', price: 8000, image: imagenes['../components/image/productos/cuaderno.jpeg'], description: 'Cuaderno tamaño carta, 100 hojas.', categoria: 'Papelería', subcategoria: 'Cuadernos' },
  { id: 22, name: 'Cuaderno cuadriculado 80 hojas', price: 7000, image: imagenes['../components/image/productos/cuaderno-cuad.jpeg'], description: 'Cuaderno con cuadrícula para matemáticas.', categoria: 'Papelería', subcategoria: 'Cuadernos' },
  { id: 23, name: 'Libreta de notas A6', price: 5000, image: imagenes['../components/image/productos/libreta.jpeg'], description: 'Libreta compacta para notas rápidas.', categoria: 'Papelería', subcategoria: 'Cuadernos' },
  
  // Subcategoría: Escritura
  { id: 4, name: 'Bolígrafo azul (paquete 10)', price: 2000, image: imagenes['../components/image/productos/boligrafo.jpeg'], description: 'Bolígrafos de punta fina, tinta suave.', categoria: 'Papelería', subcategoria: 'Escritura' },
  { id: 14, name: 'Lápices de madera docena', price: 10000, image: imagenes['../components/image/productos/lapices.jpeg'], description: 'Docena de lápices HB premium.', categoria: 'Papelería', subcategoria: 'Escritura' },
  { id: 12, name: 'Marcadores surtidos (8 colores)', price: 16000, image: imagenes['../components/image/productos/marcadores.jpeg'], description: 'Set de 8 marcadores de colores.', categoria: 'Papelería', subcategoria: 'Escritura' },
  { id: 24, name: 'Borrador escolar', price: 1000, image: imagenes['../components/image/productos/borrador.jpeg'], description: 'Borrador blanco de uso escolar.', categoria: 'Papelería', subcategoria: 'Escritura' },
  
  // Subcategoría: Archivos y Organizadores
  { id: 11, name: 'Folder manila', price: 3000, image: imagenes['../components/image/productos/folder.jpeg'], description: 'Folder resistente para documentos.', categoria: 'Papelería', subcategoria: 'Archivos y Organizadores' },
  { id: 13, name: 'Pegamento escolar 40g', price: 5000, image: imagenes['../components/image/productos/pegamento.jpeg'], description: 'Pegamento blanco seguro y eficaz.', categoria: 'Papelería', subcategoria: 'Archivos y Organizadores' },
  { id: 25, name: 'Archivador tamaño carta', price: 25000, image: imagenes['../components/image/productos/archivador.jpeg'], description: 'Archivador para documentos ordenados.', categoria: 'Papelería', subcategoria: 'Archivos y Organizadores' },

  // ========== HOGAR ==========
  // Subcategoría: Decoración
  { id: 6, name: 'Ambientador cítrico 250ml', price: 16000, image: imagenes['../components/image/productos/ambientador.jpeg'], description: 'Aroma duradero y fresco para el hogar.', categoria: 'Hogar', subcategoria: 'Decoración' },
  { id: 15, name: 'Velas aromáticas (3 unidades)', price: 26000, image: imagenes['../components/image/productos/velas.jpeg'], description: 'Velas perfumadas para ambiente.', categoria: 'Hogar', subcategoria: 'Decoración' },
  { id: 26, name: 'Cuadro decorativo 60x40cm', price: 45000, image: imagenes['../components/image/productos/cuadro.jpeg'], description: 'Cuadro decorativo para paredes.', categoria: 'Hogar', subcategoria: 'Decoración' },
  
  // Subcategoría: Baño
  { id: 16, name: 'Escobillón de baño ergonómico', price: 15000, image: imagenes['../components/image/productos/escobillon.jpeg'], description: 'Escobillón ergonómico para baño.', categoria: 'Hogar', subcategoria: 'Baño' },
  { id: 17, name: 'Cortina de baño impermeable', price: 40000, image: imagenes['../components/image/productos/cortinas.jpeg'], description: 'Cortina de baño impermeable premium.', categoria: 'Hogar', subcategoria: 'Baño' },
  { id: 27, name: 'Tapete de baño antideslizante', price: 22000, image: imagenes['../components/image/productos/tapete-baño.jpeg'], description: 'Tapete con succión para baño seguro.', categoria: 'Hogar', subcategoria: 'Baño' },
  
  // Subcategoría: Cocina
  { id: 7, name: 'Cubeta multiusos 20L', price: 29000, image: imagenes['../components/image/productos/cubeta.jpeg'], description: 'Cubeta resistente para tareas domésticas.', categoria: 'Hogar', subcategoria: 'Cocina' },
  { id: 18, name: 'Tapete de entrada 60x40cm', price: 34000, image: imagenes['../components/image/productos/tapete.jpeg'], description: 'Tapete absorbente para entrada.', categoria: 'Hogar', subcategoria: 'Cocina' },
  { id: 28, name: 'Escurridor de platos', price: 24000, image: imagenes['../components/image/productos/escurridor.jpeg'], description: 'Escurridor de platos de 2 niveles.', categoria: 'Hogar', subcategoria: 'Cocina' },

  // ========== JUGUETERÍA ==========
  // Subcategoría: Juguetes Educativos
  { id: 29, name: 'Bloques de construcción 100 piezas', price: 38000, image: imagenes['../components/image/productos/bloques.jpeg'], description: 'Bloques educativos para niños.', categoria: 'Juguetería', subcategoria: 'Juguetes Educativos' },
  { id: 30, name: 'Puzzle 500 piezas', price: 32000, image: imagenes['../components/image/productos/puzzle.jpeg'], description: 'Puzzle educativo de alta calidad.', categoria: 'Juguetería', subcategoria: 'Juguetes Educativos' },
  { id: 31, name: 'Microscopio infantil 30x', price: 55000, image: imagenes['../components/image/productos/microscopio.jpeg'], description: 'Microscopio educativo para niños.', categoria: 'Juguetería', subcategoria: 'Juguetes Educativos' },
  
  // Subcategoría: Juegos de Mesa
  { id: 32, name: 'Juego de mesa - Ajedrez magnético', price: 45000, image: imagenes['../components/image/productos/ajedrez.jpeg'], description: 'Ajedrez con piezas magnéticas.', categoria: 'Juguetería', subcategoria: 'Juegos de Mesa' },
  { id: 33, name: 'Dominó de colores (28 fichas)', price: 18000, image: imagenes['../components/image/productos/domino.jpeg'], description: 'Dominó educativo y entretenido.', categoria: 'Juguetería', subcategoria: 'Juegos de Mesa' },
  { id: 34, name: 'Cartas de póker profesionales', price: 12000, image: imagenes['../components/image/productos/cartas.jpeg'], description: 'Baraja de póker de calidad premium.', categoria: 'Juguetería', subcategoria: 'Juegos de Mesa' },
  
  // Subcategoría: Juguetes Deportivos
  { id: 35, name: 'Balón de fútbol #5', price: 48000, image: imagenes['../components/image/productos/balon-futbol.jpeg'], description: 'Balón de fútbol profesional.', categoria: 'Juguetería', subcategoria: 'Juguetes Deportivos' },
  { id: 36, name: 'Raquetas de tenis (par)', price: 85000, image: imagenes['../components/image/productos/raquetas.jpeg'], description: 'Par de raquetas de tenis.', categoria: 'Juguetería', subcategoria: 'Juguetes Deportivos' },
  { id: 37, name: 'Patines en línea ajustables', price: 125000, image: imagenes['../components/image/productos/patines.jpeg'], description: 'Patines ajustables para todas las edades.', categoria: 'Juguetería', subcategoria: 'Juguetes Deportivos' },

  // ========== PIÑATERÍA ==========
  // Subcategoría: Piñatas
  { id: 38, name: 'Piñata Tema Superman', price: 45000, image: imagenes['../components/image/productos/pinata-superman.jpeg'], description: 'Piñata con forma de Superman.', categoria: 'Piñatería', subcategoria: 'Piñatas' },
  { id: 39, name: 'Piñata Tema Princesa', price: 42000, image: imagenes['../components/image/productos/pinata-princesa.jpeg'], description: 'Piñata con forma de princesa.', categoria: 'Piñatería', subcategoria: 'Piñatas' },
  { id: 40, name: 'Piñata Star Wars BB-8', price: 55000, image: imagenes['../components/image/productos/pinata-bb8.jpeg'], description: 'Piñata de BB-8 de Star Wars.', categoria: 'Piñatería', subcategoria: 'Piñatas' },
  
  // Subcategoría: Accesorios para Piñatas
  { id: 41, name: 'Palo de piñata (1.5m)', price: 12000, image: imagenes['../components/image/productos/palo-pinata.jpeg'], description: 'Palo reforzado para romper piñata.', categoria: 'Piñatería', subcategoria: 'Accesorios para Piñatas' },
  { id: 42, name: 'Antifaces para piñata (paquete 10)', price: 8000, image: imagenes['../components/image/productos/antifaces.jpeg'], description: 'Antifaces de colores para el juego.', categoria: 'Piñatería', subcategoria: 'Accesorios para Piñatas' },
  { id: 43, name: 'Caramelos y dulces surtidos 1kg', price: 35000, image: imagenes['../components/image/productos/dulces.jpeg'], description: 'Mezcla de caramelos para piñata.', categoria: 'Piñatería', subcategoria: 'Accesorios para Piñatas' },
  
  // Subcategoría: Decoración de Fiestas
  { id: 44, name: 'Globos metalizados (15 unidades)', price: 18000, image: imagenes['../components/image/productos/globos.jpeg'], description: 'Globos metalizados para fiesta.', categoria: 'Piñatería', subcategoria: 'Decoración de Fiestas' },
  { id: 45, name: 'Guirnalda de papel colores 5m', price: 9000, image: imagenes['../components/image/productos/guirnalda.jpeg'], description: 'Guirnalda decorativa para fiestas.', categoria: 'Piñatería', subcategoria: 'Decoración de Fiestas' },
  { id: 46, name: 'Serpentinas surtidas (100 metros)', price: 12000, image: imagenes['../components/image/productos/serpentinas.jpeg'], description: 'Serpentinas de colores para decorar.', categoria: 'Piñatería', subcategoria: 'Decoración de Fiestas' },

  // ========== MAQUILLAJE ==========
  // Subcategoría: Base y Cobertura
  { id: 47, name: 'Base de maquillaje líquida 30ml', price: 32000, image: imagenes['../components/image/productos/base-maquillaje.jpeg'], description: 'Base líquida cobertura completa.', categoria: 'Maquillaje', subcategoria: 'Base y Cobertura' },
  { id: 48, name: 'Polvo compacto acabado mate', price: 22000, image: imagenes['../components/image/productos/polvo-compacto.jpeg'], description: 'Polvo compacto de larga duración.', categoria: 'Maquillaje', subcategoria: 'Base y Cobertura' },
  { id: 49, name: 'Corrector de ojeras 8ml', price: 18000, image: imagenes['../components/image/productos/corrector.jpeg'], description: 'Corrector con efecto iluminador.', categoria: 'Maquillaje', subcategoria: 'Base y Cobertura' },
  
  // Subcategoría: Ojos
  { id: 50, name: 'Paleta de sombras 12 colores', price: 38000, image: imagenes['../components/image/productos/sombras.jpg'], description: 'Paleta de sombras metalizadas.', categoria: 'Maquillaje', subcategoria: 'Ojos' },
  { id: 51, name: 'Delineador de ojos líquido', price: 15000, image: imagenes['../components/image/productos/delineador.jpg'], description: 'Delineador con punta de precisión.', categoria: 'Maquillaje', subcategoria: 'Ojos' },
  { id: 52, name: 'Rímel voluminizador', price: 24000, image: imagenes['../components/image/productos/rimmel.jpg'], description: 'Rímel para volumen máximo.', categoria: 'Maquillaje', subcategoria: 'Ojos' },
  
  // Subcategoría: Labios
  { id: 53, name: 'Labial mate 12 colores', price: 45000, image: imagenes['../components/image/productos/labial.jpg'], description: 'Set de 12 labiales mate.', categoria: 'Maquillaje', subcategoria: 'Labios' },
  { id: 54, name: 'Brillo de labios cristal', price: 12000, image: imagenes['../components/image/productos/brillo-labios.jpg'], description: 'Brillo de labios con efecto cristal.', categoria: 'Maquillaje', subcategoria: 'Labios' },
  { id: 55, name: 'Perfilador de labios', price: 9000, image: imagenes['../components/image/productos/perfilador.jpeg'], description: 'Perfilador de larga duración.', categoria: 'Maquillaje', subcategoria: 'Labios' },

  // ========== HERRAMIENTAS ==========
  // Subcategoría: Herramientas Manuales
  { id: 56, name: 'Martillo de acero 500g', price: 28000, image: imagenes['../components/image/productos/martillo.jpeg'], description: 'Martillo con mango ergonómico.', categoria: 'Herramientas', subcategoria: 'Herramientas Manuales' },
  { id: 57, name: 'Destornillador set 12 piezas', price: 35000, image: imagenes['../components/image/productos/destornillador.jpeg'], description: 'Set de destornilladores variados.', categoria: 'Herramientas', subcategoria: 'Herramientas Manuales' },
  { id: 58, name: 'Alicates profesionales', price: 22000, image: imagenes['../components/image/productos/alicates.jpeg'], description: 'Alicates de corte precisión.', categoria: 'Herramientas', subcategoria: 'Herramientas Manuales' },
  
  // Subcategoría: Medición
  { id: 59, name: 'Cinta métrica 5m', price: 12000, image: imagenes['../components/image/productos/cinta-metrica.jpeg'], description: 'Cinta métrica flexible y resistente.', categoria: 'Herramientas', subcategoria: 'Medición' },
  { id: 60, name: 'Nivel de burbuja 60cm', price: 24000, image: imagenes['../components/image/productos/nivel.jpeg'], description: 'Nivel profesional de 60cm.', categoria: 'Herramientas', subcategoria: 'Medición' },
  { id: 61, name: 'Regla de acero inoxidable 1m', price: 18000, image: imagenes['../components/image/productos/regla.jpeg'], description: 'Regla de acero inoxidable.', categoria: 'Herramientas', subcategoria: 'Medición' },
  
  // Subcategoría: Seguridad
  { id: 62, name: 'Gafas de seguridad', price: 15000, image: imagenes['../components/image/productos/gafas-seguridad.jpeg'], description: 'Gafas protectoras UV.', categoria: 'Herramientas', subcategoria: 'Seguridad' },
  { id: 63, name: 'Casco de seguridad', price: 38000, image: imagenes['../components/image/productos/casco.jpeg'], description: 'Casco de seguridad certificado.', categoria: 'Herramientas', subcategoria: 'Seguridad' },
  { id: 64, name: 'Arnés de seguridad', price: 85000, image: imagenes['../components/image/productos/arnes.jpeg'], description: 'Arnés profesional para trabajos en altura.', categoria: 'Herramientas', subcategoria: 'Seguridad' },

  // ========== FERRETERÍA ==========
  // Subcategoría: Materiales de Construcción
  { id: 65, name: 'Tabla de madera pino 2x4x12', price: 42000, image: imagenes['../components/image/productos/tabla-madera.jpeg'], description: 'Tabla de madera pino de calidad.', categoria: 'Ferretería', subcategoria: 'Materiales de Construcción' },
  { id: 66, name: 'Tubo PVC 1 pulgada', price: 28000, image: imagenes['../components/image/productos/tubo-pvc.jpeg'], description: 'Tubo PVC para plomería.', categoria: 'Ferretería', subcategoria: 'Materiales de Construcción' },
  { id: 67, name: 'Cemento bolsa 50kg', price: 32000, image: imagenes['../components/image/productos/cemento.jpeg'], description: 'Cemento tipo Portland.', categoria: 'Ferretería', subcategoria: 'Materiales de Construcción' },
  
  // Subcategoría: Tornillos y Tuercas
  { id: 68, name: 'Tornillos surtidos 500 unidades', price: 24000, image: imagenes['../components/image/productos/tornillos.jpeg'], description: 'Set variado de tornillos.', categoria: 'Ferretería', subcategoria: 'Tornillos y Tuercas' },
  { id: 69, name: 'Tuercas de acero M8 (100 unidades)', price: 15000, image: imagenes['../components/image/productos/tuercas.jpeg'], description: 'Tuercas de acero galvanizado.', categoria: 'Ferretería', subcategoria: 'Tornillos y Tuercas' },
  { id: 70, name: 'Pernos galvanizados 1/4', price: 18000, image: imagenes['../components/image/productos/pernos.jpeg'], description: 'Pernos de acero galvanizado.', categoria: 'Ferretería', subcategoria: 'Tornillos y Tuercas' },
  
  // Subcategoría: Pinturas y Acabados
  { id: 71, name: 'Pintura latex interior 1 galón', price: 65000, image: imagenes['../components/image/productos/pintura-interior.jpeg'], description: 'Pintura latex para interiores.', categoria: 'Ferretería', subcategoria: 'Pinturas y Acabados' },
  { id: 72, name: 'Barniz poliuretano 500ml', price: 48000, image: imagenes['../components/image/productos/barniz.jpeg'], description: 'Barniz protector brillante.', categoria: 'Ferretería', subcategoria: 'Pinturas y Acabados' },
  { id: 73, name: 'Thinner industrial 1 litro', price: 22000, image: imagenes['../components/image/productos/thinner.jpeg'], description: 'Diluyente para pinturas.', categoria: 'Ferretería', subcategoria: 'Pinturas y Acabados' },

  // ========== CLIMA Y ESTACIÓN ==========
  // Subcategoría: Productos para Lluvia (CORRELACIONADOS CON API)
  { id: 74, name: 'Sombrilla plegable 21 pulgadas', price: 35000, image: imagenes['../components/image/productos/sombrilla.jpeg'], description: 'Sombrilla resistente a vientos fuertes.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 75, name: 'Impermeable tipo capa', price: 52000, image: imagenes['../components/image/productos/impermeable.jpeg'], description: 'Capa impermeable para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 76, name: 'Botas impermeables', price: 68000, image: imagenes['../components/image/productos/botas.jpeg'], description: 'Botas de hule para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 89, name: 'Poncho impermeable universal', price: 45000, image: imagenes['../components/image/productos/poncho-lluvia.jpeg'], description: 'Poncho versátil para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 90, name: 'Bolsas impermeables (set 5)', price: 22000, image: imagenes['../components/image/productos/bolsas-impermeables.jpeg'], description: 'Bolsas secas para proteger objetos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 91, name: 'Paraguas automático', price: 48000, image: imagenes['../components/image/productos/paraguas-auto.jpeg'], description: 'Paraguas de apertura automática.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 92, name: 'Chanclas impermeables', price: 28000, image: imagenes['../components/image/productos/chanclas-lluvia.jpeg'], description: 'Chanclas antideslizantes para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 93, name: 'Funda protectora para mochilas', price: 18000, image: imagenes['../components/image/productos/funda-mochila.jpeg'], description: 'Funda impermeable para mochilas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  
  // Subcategoría: Productos para Frío
  { id: 77, name: 'Abrigo térmico polar', price: 85000, image: imagenes['../components/image/productos/abrigo.jpeg'], description: 'Abrigo aislante para temperaturas bajas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 78, name: 'Bufanda de lana', price: 32000, image: imagenes['../components/image/productos/bufanda.jpeg'], description: 'Bufanda de lana premium.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 79, name: 'Guantes térmicos', price: 28000, image: imagenes['../components/image/productos/guantes-termicos.jpeg'], description: 'Guantes con forro térmico.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 94, name: 'Gorro de lana premium', price: 24000, image: imagenes['../components/image/productos/gorro-lana.jpeg'], description: 'Gorro abrigador para invierno.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 95, name: 'Calcetines térmicos (pack 3 pares)', price: 35000, image: imagenes['../components/image/productos/calcetines-termicos.jpeg'], description: 'Calcetines con aislamiento térmico.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 96, name: 'Frazada de polar gruesa', price: 75000, image: imagenes['../components/image/productos/frazada-polar.jpeg'], description: 'Frazada cálida y confortable.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 97, name: 'Protector de cuello (Buff)', price: 22000, image: imagenes['../components/image/productos/buff-cuello.jpeg'], description: 'Protector multifuncional de cuello.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 98, name: 'Chamarra de invierno acolchada', price: 145000, image: imagenes['../components/image/productos/chamarra-invierno.jpeg'], description: 'Chamarra acolchada para temperaturas extremas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  
  // Subcategoría: Productos para Calor
  { id: 80, name: 'Ventilador de pedestal 20 pulgadas', price: 95000, image: imagenes['../components/image/productos/ventilador.jpeg'], description: 'Ventilador con 3 velocidades.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 81, name: 'Aire acondicionado portátil 12000 BTU', price: 450000, image: imagenes['../components/image/productos/aire-acondicionado.jpeg'], description: 'Aire acondicionado portátil.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 82, name: 'Abanico eléctrico de escritorio', price: 38000, image: imagenes['../components/image/productos/abanico.jpeg'], description: 'Abanico de bajo consumo.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 99, name: 'Ventilador de torre silencioso', price: 72000, image: imagenes['../components/image/productos/ventilador-torre.jpeg'], description: 'Ventilador moderno y silencioso.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 100, name: 'Aire acondicionado de ventana 8000 BTU', price: 380000, image: imagenes['../components/image/productos/aire-ventana.jpeg'], description: 'Aire acondicionado para ventanas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 101, name: 'Ventilador de techo 3 aspas', price: 125000, image: imagenes['../components/image/productos/ventilador-techo.jpeg'], description: 'Ventilador de techo con luz.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 102, name: 'Mini ventilador portátil USB', price: 15000, image: imagenes['../components/image/productos/mini-ventilador.jpeg'], description: 'Ventilador portátil recargable.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 103, name: 'Cooler evaporativo portátil', price: 85000, image: imagenes['../components/image/productos/cooler-evaporativo.jpeg'], description: 'Enfriador portátil por evaporación.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  
  // Subcategoría: Productos para Humedad
  { id: 83, name: 'Deshumidificador 20L', price: 125000, image: imagenes['../components/image/productos/deshumidificador.jpeg'], description: 'Deshumidificador para espacios medianos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 84, name: 'Absorbedor de humedad bolsa 500g', price: 12000, image: imagenes['../components/image/productos/absorbedor.jpeg'], description: 'Bolsa absorbedora de humedad.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 85, name: 'Sales desecantes 1kg', price: 8000, image: imagenes['../components/image/productos/sales-desecantes.jpeg'], description: 'Sales para secar ambientes.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 104, name: 'Deshumidificador compacto 16L', price: 95000, image: imagenes['../components/image/productos/deshumidificador-16l.jpeg'], description: 'Deshumidificador ultrasónico compacto.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 105, name: 'Humificador de aire ultrasónico', price: 55000, image: imagenes['../components/image/productos/humificador.jpeg'], description: 'Humificador para ambientes secos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 106, name: 'Cristal absorbedor de humedad reutilizable', price: 32000, image: imagenes['../components/image/productos/cristal-humedad.jpeg'], description: 'Perlas absorbentes reutilizables.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 107, name: 'Deshidratador de alimentos', price: 145000, image: imagenes['../components/image/productos/deshidratador.jpeg'], description: 'Para conservar alimentos secos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 108, name: 'Purificador de aire con humidificador 2 en 1', price: 185000, image: imagenes['../components/image/productos/purificador-humificador.jpeg'], description: 'Purifica y humidifica el aire.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  
  // Subcategoría: Productos de Temporada
  { id: 86, name: 'Filtro alérgeno HEPA', price: 42000, image: imagenes['../components/image/productos/filtro-hepa.jpeg'], description: 'Filtro HEPA para alérgenos.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 87, name: 'Bloqueador solar SPF 50+', price: 28000, image: imagenes['../components/image/productos/bloqueador.jpeg'], description: 'Protección solar premium.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 88, name: 'Ropa de cama antialérgica', price: 95000, image: imagenes['../components/image/productos/ropa-cama.jpeg'], description: 'Juego de cama hipoalergénico.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 109, name: 'Lavador nasal neti pot', price: 18000, image: imagenes['../components/image/productos/neti-pot.jpeg'], description: 'Para aliviar alergias estacionales.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 110, name: 'Spray antipolvo ambiental', price: 22000, image: imagenes['../components/image/productos/spray-polvo.jpeg'], description: 'Reduce polvo en el ambiente.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 111, name: 'Gafas de sol polarizadas UV400', price: 85000, image: imagenes['../components/image/productos/gafas-sol.jpeg'], description: 'Protección solar avanzada.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 112, name: 'Repelente de insectos spray 200ml', price: 28000, image: imagenes['../components/image/productos/repelente-insectos.jpeg'], description: 'Protección contra insectos.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 113, name: 'Almohada refrescante gel', price: 65000, image: imagenes['../components/image/productos/almohada-gel.jpeg'], description: 'Almohada fresca para dormir mejor.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
]

export default products;