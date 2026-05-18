export const weatherRecommendations = {
  rainy: {
    title: '🌧️ Lluvia detectada, esta es nuestra recomendación para ti',
    subtitle: 'Protege tu hogar de la lluvia',
    productIds: [74, 75, 76, 89, 90, 91, 92, 93], // Sombrilla, Impermeable tipo capa, Botas impermeables
    description: 'Productos esenciales para días lluviosos'
  },
  sunny: {
    title: '☀️ ¡Qué buen día!, esta es nuestra recomendación para ti',
    subtitle: 'Aprovecha el buen clima',
    productIds: [87, 111, 112, 102, 113, 82], // Bloqueador solar, Abanico eléctrico, Ventilador
    description: 'Protección solar y ventilación'
  },
  cold: {
    title: '❄️ Clima frío, esta es nuestra recomendación para ti',
    subtitle: 'Abrígate y mantente cálido',
    productIds: [77, 78, 79, 94, 95, 96, 97, 98], // Abrigo térmico, Bufanda de lana, Guantes térmicos
    description: 'Todo lo que necesitas para el frío'
  },
  hot: {
    title: '🔥 Calor intenso, esta es nuestra recomendación para ti',
    subtitle: 'Mantén la casa fresca',
    productIds: [80, 82, 81, 99, 100, 101, 102, 103], // Ventilador, Abanico, Aire acondicionado
    description: 'Productos para enfriamiento'
  },
  humid: {
    title: '💧 Humedad alta, esta es nuestra recomendación para ti',
    subtitle: 'Controla la humedad del ambiente',
    productIds: [83, 84, 85, 104, 105, 106, 107, 108], // Deshumidificador, Absorbedor, Sales desecantes
    description: 'Prevén hongos y malos olores'
  },
  default: {
    title: '🛍️ Productos destacados, esta es nuestra recomendación para ti',
    subtitle: 'Ofertas especiales de hoy',
    productIds: [1, 29, 47], // Escoba clásica, Bloques construcción, Base maquillaje
    description: 'Lo mejor de nuestro catálogo'
  }
}