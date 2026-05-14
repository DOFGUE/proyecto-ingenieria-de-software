import React, { useRef, useContext, useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import gsap from 'gsap'
import products from '../data/products'
import './css/body.css'

// Mapeo de nombres normalizados a nombres de categoría en products
const categoryMapping = {
  limpieza: 'Limpieza',
  papeleria: 'Papelería',
  hogar: 'Hogar',
  jugueteria: 'Juguetería',
  piñateria: 'Piñatería',
  maquillaje: 'Maquillaje',
  herramientas: 'Herramientas',
  ferreteria: 'Ferretería',
  clima: 'Clima y Estación',
}

// Mapeo de subcategorías normalizadas a nombres reales
const subcategoryMapping = {
  'limpieza-general': 'Limpieza General',
  'desinfectantes': 'Desinfectantes',
  'proteccion': 'Protección',
  'cuadernos': 'Cuadernos',
  'escritura': 'Escritura',
  'archivos-organizadores': 'Archivos y Organizadores',
  'decoracion': 'Decoración',
  'baño': 'Baño',
  'cocina': 'Cocina',
  'juguetes-educativos': 'Juguetes Educativos',
  'juegos-mesa': 'Juegos de Mesa',
  'juguetes-deportivos': 'Juguetes Deportivos',
  'piñatas': 'Piñatas',
  'accesorios-piñatas': 'Accesorios para Piñatas',
  'decoracion-fiestas': 'Decoración de Fiestas',
  'base-cobertura': 'Base y Cobertura',
  'ojos': 'Ojos',
  'labios': 'Labios',
  'herramientas-manuales': 'Herramientas Manuales',
  'medicion': 'Medición',
  'seguridad': 'Seguridad',
  'materiales-construccion': 'Materiales de Construcción',
  'tornillos-tuercas': 'Tornillos y Tuercas',
  'pinturas-acabados': 'Pinturas y Acabados',
  'productos-lluvia': 'Productos para Lluvia',
  'productos-frio': 'Productos para Frío',
  'productos-calor': 'Productos para Calor',
  'productos-humedad': 'Productos para Humedad',
  'productos-temporada': 'Productos de Temporada',
}

// Componente de Card Individual
const ProductCard = ({ item, addToCart, cardRef }) => {
  return (
    <div ref={cardRef} className="product-card">
      <div className="product-card-image">
        <Link to={`/product/${item.id}`} className="product-card-image-link">
          <img src={item.image} alt={item.name} />
        </Link>
      </div>

      <div className="product-card-content">
        <Link to={`/product/${item.id}`} className="product-card-link">
          <h3 className="product-card-name">{item.name}</h3>
          <p className="product-card-description">{item.description}</p>
        </Link>

        <div className="product-card-footer">
          <span className="product-card-price">${Number(item.price).toFixed(0)}</span>
          <button
            onClick={() => addToCart(item)}
            className="product-card-btn"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

const CategoryPage = () => {
  const { categoria } = useParams()
  const [searchParams] = useSearchParams()
  const subcategoria = searchParams.get('sub')
  const { addToCart } = useContext(CartContext)
  const cardsRef = useRef([])

  // Obtener el nombre real de la categoría
  const categoryName = categoryMapping[categoria] || categoria

  // Filtrar productos por categoría
  let productosCat = categoria === 'todos' 
    ? products 
    : products.filter(
        (p) => p.categoria.toLowerCase().replace(' ', '-') === categoria || p.categoria === categoryName
      )

  // Si hay subcategoría, filtrar aún más
  if (subcategoria) {
    const subcategoryName = subcategoryMapping[subcategoria]
    productosCat = productosCat.filter((p) => p.subcategoria === subcategoryName)
  }

  // Animar cards cuando se cargan o cuando cambia el contenido
  useEffect(() => {
    if (cardsRef.current.length === 0) return

    // Establecer estado inicial
    gsap.set(cardsRef.current, { opacity: 0, y: -40 })

    // Animar caída suave
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
    })
  }, [productosCat])

  const title = subcategoria 
    ? `${subcategoryMapping[subcategoria] || subcategoria}` 
    : categoryName

  return (
    <div className="body-container">
      <div className="containerCards">
        <div className="top">
          <h2>{title}</h2>
          <Link to="/" className="btn-back">
            ← Volver
          </Link>
        </div>

        {productosCat.length > 0 ? (
          <div className="products-grid">
            {productosCat.map((item, index) => (
              <ProductCard
                key={item.id}
                item={item}
                addToCart={addToCart}
                cardRef={(el) => (cardsRef.current[index] = el)}
              />
            ))}
          </div>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            <p>No hay productos en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
