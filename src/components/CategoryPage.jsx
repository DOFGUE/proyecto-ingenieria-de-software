import React, { useRef, useCallback, useMemo, useContext } from 'react'
import { FocusZone, List, mergeStyleSets, useTheme, ThemeProvider, initializeIcons } from '@fluentui/react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import products from '../data/products'
import './css/body.css'

initializeIcons()

const generateStyles = (theme) => {
  const { palette, fonts } = theme
  return mergeStyleSets({
    listGridExample: {
      overflow: 'hidden',
      fontSize: 0,
      position: 'relative',
    },
    listGridExampleTile: {
      textAlign: 'center',
      outline: 'none',
      position: 'relative',
      float: 'left',
      boxSizing: 'border-box',
      margin: 8,
      background: palette.neutralLighter,
    },
    listGridExampleSizer: {
      paddingBottom: '100%',
    },
    listGridExamplePadder: {
      position: 'absolute',
      left: 2,
      top: 2,
      right: 2,
      bottom: 2,
    },
    listGridExampleLabel: {
      background: 'rgba(0, 0, 0, 0.3)',
      color: palette.white,
      position: 'absolute',
      padding: 10,
      bottom: 0,
      left: 0,
      width: '100%',
      fontSize: fonts.small.fontSize,
      boxSizing: 'border-box',
    },
    listGridExampleLabelTitle: {
      fontWeight: 600,
      display: 'block',
      marginBottom: 4,
    },
    listGridExamplePrice: {
      fontWeight: 700,
      display: 'block',
      marginBottom: 6,
    },
    listGridExampleDesc: {
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: fonts.xSmall.fontSize,
      opacity: 0.95,
    },
    listGridExampleImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
    },
  })
}

// Mapeo de categorías a emojis
const categoryEmojis = {
  limpieza: '🧹',
  papeleria: '📝',
  hogar: '🏠',
  jugueteria: '🧩',
  piñateria: '🎉',
  maquillaje: '💄',
  herramientas: '🔧',
  ferreteria: '🪛',
  clima: '🌤️',
  todos: '🛍️',
}

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

const CategoryPage = () => {
  const { categoria } = useParams()
  const [searchParams] = useSearchParams()
  const subcategoria = searchParams.get('sub')

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

  const ProductCards = ({ items }) => {
    const columnCount = useRef(0)
    const rowHeight = useRef(0)
    const theme = useTheme()
    const classNames = useMemo(() => generateStyles(theme), [theme])
    const { addToCart } = useContext(CartContext)

    const getItemCountForPage = useCallback((itemIndex, surfaceRect) => {
      if (itemIndex === 0) {
        columnCount.current = Math.max(1, Math.floor(surfaceRect.width / 250))
        rowHeight.current = Math.floor(surfaceRect.width / columnCount.current)
      }
      return columnCount.current * 3
    }, [])

    const onRenderCell = useCallback(
      (item, index) => {
        return (
          <div
            className={classNames.listGridExampleTile}
            data-is-focusable
            style={{
              width: `calc(${100 / Math.max(1, columnCount.current)}% - 16px)`,
            }}
          >
            <div className={classNames.listGridExampleSizer}>
              <div className={classNames.listGridExamplePadder}>
                <Link to={`/product/${item.id}`} style={{ display: 'block', height: '100%' }}>
                  <img src={item.image} alt={item.name} className={classNames.listGridExampleImage} />
                </Link>
                <div className={classNames.listGridExampleLabel} style={{ paddingBottom: 50 }}>
                  <Link to={`/product/${item.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <span className={classNames.listGridExampleLabelTitle}>{item.name}</span>
                  </Link>
                  {item.price !== undefined && (
                    <span className={classNames.listGridExamplePrice}>${Number(item.price).toFixed(0)}</span>
                  )}
                  {item.description && <div className={classNames.listGridExampleDesc}>{item.description}</div>}
                </div>
                <button
                  onClick={() => addToCart(item)}
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    padding: '6px 8px',
                    background: '#0078d4',
                    color: 'white',
                    border: 'none',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 600,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.background = '#005a9e')}
                  onMouseLeave={(e) => (e.target.style.background = '#0078d4')}
                >
                  Añadir
                </button>
              </div>
            </div>
          </div>
        )
      },
      [classNames, addToCart, columnCount]
    )

    const getPageHeight = useCallback(() => rowHeight.current * 3, [])

    return (
      <ThemeProvider>
        <FocusZone>
          <List
            className={classNames.listGridExample}
            items={items}
            getItemCountForPage={getItemCountForPage}
            getPageHeight={getPageHeight}
            onRenderCell={onRenderCell}
          />
        </FocusZone>
      </ThemeProvider>
    )
  }

  const title = subcategoria 
    ? `${subcategoryMapping[subcategoria] || subcategoria}` 
    : categoryName

  return (
    <div className="body-container">
      <div className="containerCards">
        <div className="top">
          <h2>
            {categoryEmojis[categoria] || '📦'} {title}
          </h2>
          <Link to="/" className="btn-back">
            ← Volver
          </Link>
        </div>

        {productosCat.length > 0 ? (
          <div className="cards">
            <ProductCards items={productosCat} />
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
