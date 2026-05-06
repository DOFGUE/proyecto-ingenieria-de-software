const products = [
  // ========== LIMPIEZA ==========
  // Subcategoría: Limpieza General
  { id: 1, name: 'Escoba clásica', price: 24000, image: '/images/escoba.jpg', description: 'Escoba resistente para uso doméstico.', categoria: 'Limpieza', subcategoria: 'Limpieza General' },
  { id: 2, name: 'Detergente concentrado', price: 14000, image: '/images/detergente.jpg', description: 'Limpieza profunda y ahorro.', categoria: 'Limpieza', subcategoria: 'Limpieza General' },
  { id: 5, name: 'Paño de microfibra', price: 10000, image: '/images/paño.jpg', description: 'Ideal para limpieza sin rayas.', categoria: 'Limpieza', subcategoria: 'Limpieza General' },
  
  // Subcategoría: Desinfectantes
  { id: 9, name: 'Cloro desinfectante', price: 9000, image: '/images/cloro.jpg', description: 'Desinfectante potente y económico.', categoria: 'Limpieza', subcategoria: 'Desinfectantes' },
  { id: 19, name: 'Spray desinfectante 500ml', price: 12000, image: '/images/spray-desinfectante.jpg', description: 'Spray desinfectante para superficies.', categoria: 'Limpieza', subcategoria: 'Desinfectantes' },
  { id: 20, name: 'Desinfectante en polvo', price: 8000, image: '/images/desinfectante-polvo.jpg', description: 'Desinfectante en polvo de uso múltiple.', categoria: 'Limpieza', subcategoria: 'Desinfectantes' },
  
  // Subcategoría: Protección
  { id: 8, name: 'Guantes de limpieza', price: 12000, image: '/images/guantes.jpg', description: 'Protección cómoda y duradera.', categoria: 'Limpieza', subcategoria: 'Protección' },
  { id: 10, name: 'Jabón líquido', price: 17000, image: '/images/jabon.jpg', description: 'Jabón suave para manos y superficies.', categoria: 'Limpieza', subcategoria: 'Protección' },
  { id: 21, name: 'Mascarilla protectora (10 unidades)', price: 15000, image: '/images/mascarillas.jpg', description: 'Mascarillas protectoras reutilizables.', categoria: 'Limpieza', subcategoria: 'Protección' },

  // ========== PAPELERÍA ==========
  // Subcategoría: Cuadernos
  { id: 3, name: 'Cuaderno rayado 100 hojas', price: 8000, image: '/images/cuaderno.jpg', description: 'Cuaderno tamaño carta, 100 hojas.', categoria: 'Papelería', subcategoria: 'Cuadernos' },
  { id: 22, name: 'Cuaderno cuadriculado 80 hojas', price: 7000, image: '/images/cuaderno-cuad.jpg', description: 'Cuaderno con cuadrícula para matemáticas.', categoria: 'Papelería', subcategoria: 'Cuadernos' },
  { id: 23, name: 'Libreta de notas A6', price: 5000, image: '/images/libreta.jpg', description: 'Libreta compacta para notas rápidas.', categoria: 'Papelería', subcategoria: 'Cuadernos' },
  
  // Subcategoría: Escritura
  { id: 4, name: 'Bolígrafo azul (paquete 10)', price: 2000, image: '/images/boligrafo.jpg', description: 'Bolígrafos de punta fina, tinta suave.', categoria: 'Papelería', subcategoria: 'Escritura' },
  { id: 14, name: 'Lápices de madera docena', price: 10000, image: '/images/lapices.jpg', description: 'Docena de lápices HB premium.', categoria: 'Papelería', subcategoria: 'Escritura' },
  { id: 12, name: 'Marcadores surtidos (8 colores)', price: 16000, image: '/images/marcadores.jpg', description: 'Set de 8 marcadores de colores.', categoria: 'Papelería', subcategoria: 'Escritura' },
  { id: 24, name: 'Borrador escolar', price: 1000, image: '/images/borrador.jpg', description: 'Borrador blanco de uso escolar.', categoria: 'Papelería', subcategoria: 'Escritura' },
  
  // Subcategoría: Archivos y Organizadores
  { id: 11, name: 'Folder manila', price: 3000, image: '/images/folder.jpg', description: 'Folder resistente para documentos.', categoria: 'Papelería', subcategoria: 'Archivos y Organizadores' },
  { id: 13, name: 'Pegamento escolar 40g', price: 5000, image: '/images/pegamento.jpg', description: 'Pegamento blanco seguro y eficaz.', categoria: 'Papelería', subcategoria: 'Archivos y Organizadores' },
  { id: 25, name: 'Archivador tamaño carta', price: 25000, image: '/images/archivador.jpg', description: 'Archivador para documentos ordenados.', categoria: 'Papelería', subcategoria: 'Archivos y Organizadores' },

  // ========== HOGAR ==========
  // Subcategoría: Decoración
  { id: 6, name: 'Ambientador cítrico 250ml', price: 16000, image: '/images/ambientador.jpg', description: 'Aroma duradero y fresco para el hogar.', categoria: 'Hogar', subcategoria: 'Decoración' },
  { id: 15, name: 'Velas aromáticas (3 unidades)', price: 26000, image: '/images/velas.jpg', description: 'Velas perfumadas para ambiente.', categoria: 'Hogar', subcategoria: 'Decoración' },
  { id: 26, name: 'Cuadro decorativo 60x40cm', price: 45000, image: '/images/cuadro.jpg', description: 'Cuadro decorativo para paredes.', categoria: 'Hogar', subcategoria: 'Decoración' },
  
  // Subcategoría: Baño
  { id: 16, name: 'Escobillón de baño ergonómico', price: 15000, image: '/images/escobillon.jpg', description: 'Escobillón ergonómico para baño.', categoria: 'Hogar', subcategoria: 'Baño' },
  { id: 17, name: 'Cortina de baño impermeable', price: 40000, image: '/images/cortinas.jpg', description: 'Cortina de baño impermeable premium.', categoria: 'Hogar', subcategoria: 'Baño' },
  { id: 27, name: 'Tapete de baño antideslizante', price: 22000, image: '/images/tapete-baño.jpg', description: 'Tapete con succión para baño seguro.', categoria: 'Hogar', subcategoria: 'Baño' },
  
  // Subcategoría: Cocina
  { id: 7, name: 'Cubeta multiusos 20L', price: 29000, image: '/images/cubeta.jpg', description: 'Cubeta resistente para tareas domésticas.', categoria: 'Hogar', subcategoria: 'Cocina' },
  { id: 18, name: 'Tapete de entrada 60x40cm', price: 34000, image: '/images/tapete.jpg', description: 'Tapete absorbente para entrada.', categoria: 'Hogar', subcategoria: 'Cocina' },
  { id: 28, name: 'Escurridor de platos', price: 24000, image: '/images/escurridor.jpg', description: 'Escurridor de platos de 2 niveles.', categoria: 'Hogar', subcategoria: 'Cocina' },

  // ========== JUGUETERÍA ==========
  // Subcategoría: Juguetes Educativos
  { id: 29, name: 'Bloques de construcción 100 piezas', price: 38000, image: '/images/bloques.jpg', description: 'Bloques educativos para niños.', categoria: 'Juguetería', subcategoria: 'Juguetes Educativos' },
  { id: 30, name: 'Puzzle 500 piezas', price: 32000, image: '/images/puzzle.jpg', description: 'Puzzle educativo de alta calidad.', categoria: 'Juguetería', subcategoria: 'Juguetes Educativos' },
  { id: 31, name: 'Microscopio infantil 30x', price: 55000, image: '/images/microscopio.jpg', description: 'Microscopio educativo para niños.', categoria: 'Juguetería', subcategoria: 'Juguetes Educativos' },
  
  // Subcategoría: Juegos de Mesa
  { id: 32, name: 'Juego de mesa - Ajedrez magnético', price: 45000, image: '/images/ajedrez.jpg', description: 'Ajedrez con piezas magnéticas.', categoria: 'Juguetería', subcategoria: 'Juegos de Mesa' },
  { id: 33, name: 'Dominó de colores (28 fichas)', price: 18000, image: '/images/domino.jpg', description: 'Dominó educativo y entretenido.', categoria: 'Juguetería', subcategoria: 'Juegos de Mesa' },
  { id: 34, name: 'Cartas de póker profesionales', price: 12000, image: '/images/cartas.jpg', description: 'Baraja de póker de calidad premium.', categoria: 'Juguetería', subcategoria: 'Juegos de Mesa' },
  
  // Subcategoría: Juguetes Deportivos
  { id: 35, name: 'Balón de fútbol #5', price: 48000, image: '/images/balon-futbol.jpg', description: 'Balón de fútbol profesional.', categoria: 'Juguetería', subcategoria: 'Juguetes Deportivos' },
  { id: 36, name: 'Raquetas de tenis (par)', price: 85000, image: '/images/raquetas.jpg', description: 'Par de raquetas de tenis.', categoria: 'Juguetería', subcategoria: 'Juguetes Deportivos' },
  { id: 37, name: 'Patines en línea ajustables', price: 125000, image: '/images/patines.jpg', description: 'Patines ajustables para todas las edades.', categoria: 'Juguetería', subcategoria: 'Juguetes Deportivos' },

  // ========== PIÑATERÍA ==========
  // Subcategoría: Piñatas
  { id: 38, name: 'Piñata Tema Superman', price: 45000, image: '/images/pinata-superman.jpg', description: 'Piñata con forma de Superman.', categoria: 'Piñatería', subcategoria: 'Piñatas' },
  { id: 39, name: 'Piñata Tema Princesa', price: 42000, image: '/images/pinata-princesa.jpg', description: 'Piñata con forma de princesa.', categoria: 'Piñatería', subcategoria: 'Piñatas' },
  { id: 40, name: 'Piñata Star Wars BB-8', price: 55000, image: '/images/pinata-bb8.jpg', description: 'Piñata de BB-8 de Star Wars.', categoria: 'Piñatería', subcategoria: 'Piñatas' },
  
  // Subcategoría: Accesorios para Piñatas
  { id: 41, name: 'Palo de piñata (1.5m)', price: 12000, image: '/images/palo-pinata.jpg', description: 'Palo reforzado para romper piñata.', categoria: 'Piñatería', subcategoria: 'Accesorios para Piñatas' },
  { id: 42, name: 'Antifaces para piñata (paquete 10)', price: 8000, image: '/images/antifaces.jpg', description: 'Antifaces de colores para el juego.', categoria: 'Piñatería', subcategoria: 'Accesorios para Piñatas' },
  { id: 43, name: 'Caramelos y dulces surtidos 1kg', price: 35000, image: '/images/dulces.jpg', description: 'Mezcla de caramelos para piñata.', categoria: 'Piñatería', subcategoria: 'Accesorios para Piñatas' },
  
  // Subcategoría: Decoración de Fiestas
  { id: 44, name: 'Globos metalizados (15 unidades)', price: 18000, image: '/images/globos.jpg', description: 'Globos metalizados para fiesta.', categoria: 'Piñatería', subcategoria: 'Decoración de Fiestas' },
  { id: 45, name: 'Guirnalda de papel colores 5m', price: 9000, image: '/images/guirnalda.jpg', description: 'Guirnalda decorativa para fiestas.', categoria: 'Piñatería', subcategoria: 'Decoración de Fiestas' },
  { id: 46, name: 'Serpentinas surtidas (100 metros)', price: 12000, image: '/images/serpentinas.jpg', description: 'Serpentinas de colores para decorar.', categoria: 'Piñatería', subcategoria: 'Decoración de Fiestas' },

  // ========== MAQUILLAJE ==========
  // Subcategoría: Base y Cobertura
  { id: 47, name: 'Base de maquillaje líquida 30ml', price: 32000, image: '/images/base-maquillaje.jpg', description: 'Base líquida cobertura completa.', categoria: 'Maquillaje', subcategoria: 'Base y Cobertura' },
  { id: 48, name: 'Polvo compacto acabado mate', price: 22000, image: '/images/polvo-compacto.jpg', description: 'Polvo compacto de larga duración.', categoria: 'Maquillaje', subcategoria: 'Base y Cobertura' },
  { id: 49, name: 'Corrector de ojeras 8ml', price: 18000, image: '/images/corrector.jpg', description: 'Corrector con efecto iluminador.', categoria: 'Maquillaje', subcategoria: 'Base y Cobertura' },
  
  // Subcategoría: Ojos
  { id: 50, name: 'Paleta de sombras 12 colores', price: 38000, image: '/images/sombras.jpg', description: 'Paleta de sombras metalizadas.', categoria: 'Maquillaje', subcategoria: 'Ojos' },
  { id: 51, name: 'Delineador de ojos líquido', price: 15000, image: '/images/delineador.jpg', description: 'Delineador con punta de precisión.', categoria: 'Maquillaje', subcategoria: 'Ojos' },
  { id: 52, name: 'Rímel voluminizador', price: 24000, image: '/images/rimmel.jpg', description: 'Rímel para volumen máximo.', categoria: 'Maquillaje', subcategoria: 'Ojos' },
  
  // Subcategoría: Labios
  { id: 53, name: 'Labial mate 12 colores', price: 45000, image: '/images/labial.jpg', description: 'Set de 12 labiales mate.', categoria: 'Maquillaje', subcategoria: 'Labios' },
  { id: 54, name: 'Brillo de labios cristal', price: 12000, image: '/images/brillo-labios.jpg', description: 'Brillo de labios con efecto cristal.', categoria: 'Maquillaje', subcategoria: 'Labios' },
  { id: 55, name: 'Perfilador de labios', price: 9000, image: '/images/perfilador.jpg', description: 'Perfilador de larga duración.', categoria: 'Maquillaje', subcategoria: 'Labios' },

  // ========== HERRAMIENTAS ==========
  // Subcategoría: Herramientas Manuales
  { id: 56, name: 'Martillo de acero 500g', price: 28000, image: '/images/martillo.jpg', description: 'Martillo con mango ergonómico.', categoria: 'Herramientas', subcategoria: 'Herramientas Manuales' },
  { id: 57, name: 'Destornillador set 12 piezas', price: 35000, image: '/images/destornillador.jpg', description: 'Set de destornilladores variados.', categoria: 'Herramientas', subcategoria: 'Herramientas Manuales' },
  { id: 58, name: 'Alicates profesionales', price: 22000, image: '/images/alicates.jpg', description: 'Alicates de corte precisión.', categoria: 'Herramientas', subcategoria: 'Herramientas Manuales' },
  
  // Subcategoría: Medición
  { id: 59, name: 'Cinta métrica 5m', price: 12000, image: '/images/cinta-metrica.jpg', description: 'Cinta métrica flexible y resistente.', categoria: 'Herramientas', subcategoria: 'Medición' },
  { id: 60, name: 'Nivel de burbuja 60cm', price: 24000, image: '/images/nivel.jpg', description: 'Nivel profesional de 60cm.', categoria: 'Herramientas', subcategoria: 'Medición' },
  { id: 61, name: 'Regla de acero inoxidable 1m', price: 18000, image: '/images/regla.jpg', description: 'Regla de acero inoxidable.', categoria: 'Herramientas', subcategoria: 'Medición' },
  
  // Subcategoría: Seguridad
  { id: 62, name: 'Gafas de seguridad', price: 15000, image: '/images/gafas-seguridad.jpg', description: 'Gafas protectoras UV.', categoria: 'Herramientas', subcategoria: 'Seguridad' },
  { id: 63, name: 'Casco de seguridad', price: 38000, image: '/images/casco.jpg', description: 'Casco de seguridad certificado.', categoria: 'Herramientas', subcategoria: 'Seguridad' },
  { id: 64, name: 'Arnés de seguridad', price: 85000, image: '/images/arnes.jpg', description: 'Arnés profesional para trabajos en altura.', categoria: 'Herramientas', subcategoria: 'Seguridad' },

  // ========== FERRETERÍA ==========
  // Subcategoría: Materiales de Construcción
  { id: 65, name: 'Tabla de madera pino 2x4x12', price: 42000, image: '/images/tabla-madera.jpg', description: 'Tabla de madera pino de calidad.', categoria: 'Ferretería', subcategoria: 'Materiales de Construcción' },
  { id: 66, name: 'Tubo PVC 1 pulgada', price: 28000, image: '/images/tubo-pvc.jpg', description: 'Tubo PVC para plomería.', categoria: 'Ferretería', subcategoria: 'Materiales de Construcción' },
  { id: 67, name: 'Cemento bolsa 50kg', price: 32000, image: '/images/cemento.jpg', description: 'Cemento tipo Portland.', categoria: 'Ferretería', subcategoria: 'Materiales de Construcción' },
  
  // Subcategoría: Tornillos y Tuercas
  { id: 68, name: 'Tornillos surtidos 500 unidades', price: 24000, image: '/images/tornillos.jpg', description: 'Set variado de tornillos.', categoria: 'Ferretería', subcategoria: 'Tornillos y Tuercas' },
  { id: 69, name: 'Tuercas de acero M8 (100 unidades)', price: 15000, image: '/images/tuercas.jpg', description: 'Tuercas de acero galvanizado.', categoria: 'Ferretería', subcategoria: 'Tornillos y Tuercas' },
  { id: 70, name: 'Pernos galvanizados 1/4', price: 18000, image: '/images/pernos.jpg', description: 'Pernos de acero galvanizado.', categoria: 'Ferretería', subcategoria: 'Tornillos y Tuercas' },
  
  // Subcategoría: Pinturas y Acabados
  { id: 71, name: 'Pintura latex interior 1 galón', price: 65000, image: '/images/pintura-interior.jpg', description: 'Pintura latex para interiores.', categoria: 'Ferretería', subcategoria: 'Pinturas y Acabados' },
  { id: 72, name: 'Barniz poliuretano 500ml', price: 48000, image: '/images/barniz.jpg', description: 'Barniz protector brillante.', categoria: 'Ferretería', subcategoria: 'Pinturas y Acabados' },
  { id: 73, name: 'Thinner industrial 1 litro', price: 22000, image: '/images/thinner.jpg', description: 'Diluyente para pinturas.', categoria: 'Ferretería', subcategoria: 'Pinturas y Acabados' },

  // ========== CLIMA Y ESTACIÓN ==========
  // Subcategoría: Productos para Lluvia (CORRELACIONADOS CON API)
  { id: 74, name: 'Sombrilla plegable 21 pulgadas', price: 35000, image: '/images/sombrilla.jpg', description: 'Sombrilla resistente a vientos fuertes.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 75, name: 'Impermeable tipo capa', price: 52000, image: '/images/impermeable.jpg', description: 'Capa impermeable para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 76, name: 'Botas impermeables', price: 68000, image: '/images/botas.jpg', description: 'Botas de hule para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 89, name: 'Poncho impermeable universal', price: 45000, image: '/images/poncho-lluvia.jpg', description: 'Poncho versátil para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 90, name: 'Bolsas impermeables (set 5)', price: 22000, image: '/images/bolsas-impermeables.jpg', description: 'Bolsas secas para proteger objetos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 91, name: 'Paraguas automático', price: 48000, image: '/images/paraguas-auto.jpg', description: 'Paraguas de apertura automática.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 92, name: 'Chanclas impermeables', price: 28000, image: '/images/chanclas-lluvia.jpg', description: 'Chanclas antideslizantes para lluvia.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  { id: 93, name: 'Funda protectora para mochilas', price: 18000, image: '/images/funda-mochila.jpg', description: 'Funda impermeable para mochilas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Lluvia' },
  
  // Subcategoría: Productos para Frío
  { id: 77, name: 'Abrigo térmico polar', price: 85000, image: '/images/abrigo.jpg', description: 'Abrigo aislante para temperaturas bajas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 78, name: 'Bufanda de lana', price: 32000, image: '/images/bufanda.jpg', description: 'Bufanda de lana premium.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 79, name: 'Guantes térmicos', price: 28000, image: '/images/guantes-termicos.jpg', description: 'Guantes con forro térmico.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 94, name: 'Gorro de lana premium', price: 24000, image: '/images/gorro-lana.jpg', description: 'Gorro abrigador para invierno.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 95, name: 'Calcetines térmicos (pack 3 pares)', price: 35000, image: '/images/calcetines-termicos.jpg', description: 'Calcetines con aislamiento térmico.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 96, name: 'Frazada de polar gruesa', price: 75000, image: '/images/frazada-polar.jpg', description: 'Frazada cálida y confortable.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 97, name: 'Protector de cuello (Buff)', price: 22000, image: '/images/buff-cuello.jpg', description: 'Protector multifuncional de cuello.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  { id: 98, name: 'Chamarra de invierno acolchada', price: 145000, image: '/images/chamarra-invierno.jpg', description: 'Chamarra acolchada para temperaturas extremas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Frío' },
  
  // Subcategoría: Productos para Calor
  { id: 80, name: 'Ventilador de pedestal 20 pulgadas', price: 95000, image: '/images/ventilador.jpg', description: 'Ventilador con 3 velocidades.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 81, name: 'Aire acondicionado portátil 12000 BTU', price: 450000, image: '/images/aire-acondicionado.jpg', description: 'Aire acondicionado portátil.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 82, name: 'Abanico eléctrico de escritorio', price: 38000, image: '/images/abanico.jpg', description: 'Abanico de bajo consumo.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 99, name: 'Ventilador de torre silencioso', price: 72000, image: '/images/ventilador-torre.jpg', description: 'Ventilador moderno y silencioso.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 100, name: 'Aire acondicionado de ventana 8000 BTU', price: 380000, image: '/images/aire-ventana.jpg', description: 'Aire acondicionado para ventanas.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 101, name: 'Ventilador de techo 3 aspas', price: 125000, image: '/images/ventilador-techo.jpg', description: 'Ventilador de techo con luz.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 102, name: 'Mini ventilador portátil USB', price: 15000, image: '/images/mini-ventilador.jpg', description: 'Ventilador portátil recargable.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  { id: 103, name: 'Cooler evaporativo portátil', price: 85000, image: '/images/cooler-evaporativo.jpg', description: 'Enfriador portátil por evaporación.', categoria: 'Clima y Estación', subcategoria: 'Productos para Calor' },
  
  // Subcategoría: Productos para Humedad
  { id: 83, name: 'Deshumidificador 20L', price: 125000, image: '/images/deshumidificador.jpg', description: 'Deshumidificador para espacios medianos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 84, name: 'Absorbedor de humedad bolsa 500g', price: 12000, image: '/images/absorbedor.jpg', description: 'Bolsa absorbedora de humedad.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 85, name: 'Sales desecantes 1kg', price: 8000, image: '/images/sales-desecantes.jpg', description: 'Sales para secar ambientes.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 104, name: 'Deshumidificador compacto 16L', price: 95000, image: '/images/deshumidificador-16l.jpg', description: 'Deshumidificador ultrasónico compacto.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 105, name: 'Humificador de aire ultrasónico', price: 55000, image: '/images/humificador.jpg', description: 'Humificador para ambientes secos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 106, name: 'Cristal absorbedor de humedad reutilizable', price: 32000, image: '/images/cristal-absorbedor.jpg', description: 'Perlas absorbentes reutilizables.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 107, name: 'Deshidratador de alimentos', price: 145000, image: '/images/deshidratador.jpg', description: 'Para conservar alimentos secos.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  { id: 108, name: 'Purificador de aire con humidificador 2 en 1', price: 185000, image: '/images/purificador-humificador.jpg', description: 'Purifica y humidifica el aire.', categoria: 'Clima y Estación', subcategoria: 'Productos para Humedad' },
  
  // Subcategoría: Productos de Temporada
  { id: 86, name: 'Filtro alérgeno HEPA', price: 42000, image: '/images/filtro-hepa.jpg', description: 'Filtro HEPA para alérgenos.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 87, name: 'Bloqueador solar SPF 50+', price: 28000, image: '/images/bloqueador.jpg', description: 'Protección solar premium.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 88, name: 'Ropa de cama antialérgica', price: 95000, image: '/images/ropa-cama.jpg', description: 'Juego de cama hipoalergénico.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 109, name: 'Lavador nasal neti pot', price: 18000, image: '/images/neti-pot.jpg', description: 'Para aliviar alergias estacionales.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 110, name: 'Spray antipolvo ambiental', price: 22000, image: '/images/spray-antipolvo.jpg', description: 'Reduce polvo en el ambiente.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 111, name: 'Gafas de sol polarizadas UV400', price: 85000, image: '/images/gafas-sol.jpg', description: 'Protección solar avanzada.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 112, name: 'Repelente de insectos spray 200ml', price: 28000, image: '/images/repelente.jpg', description: 'Protección contra insectos.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
  { id: 113, name: 'Almohada refrescante gel', price: 65000, image: '/images/almohada-gel.jpg', description: 'Almohada fresca para dormir mejor.', categoria: 'Clima y Estación', subcategoria: 'Productos de Temporada' },
]

export default products;