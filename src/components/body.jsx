import React, { useState, useEffect, useRef, useCallback, useMemo, useContext } from 'react'
import { Icon, FocusZone, List, mergeStyleSets, useTheme, ThemeProvider, initializeIcons } from '@fluentui/react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import limpieza from './image/limpieza.jpg'
import hogar from './image/hogar.jpg'
import oficina from './image/oficina.jpg'
import './css/body.css'
import products from '../data/products'
import { WeatherRecommendations } from './WeatherRecommendations'

initializeIcons()

const carouselItems = [
  {
    id: 1,
    title: 'Productos de Limpieza',
    description: 'Descubre nuestra amplia variedad de productos de limpieza y desinfección para tu hogar.',
    image: limpieza,
  },
  {
    id: 2,
    title: 'Papelería y Oficina',
    description: 'Todo lo que necesitas para tu oficina o escritorio.',
    image: oficina,
  },
  {
    id: 3,
    title: 'Artículos para el Hogar',
    description: 'Equipos y accesorios prácticos para tu hogar.',
    image: hogar,
  },
]

export const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mostrarProductos, setMostrarProductos] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }

  const currentItem = carouselItems[currentIndex]
  const productosAMostrar = products.slice(0, 8)

  const generateStyles = (theme) => {
    const { palette, fonts } = theme
    return mergeStyleSets({
      listGridExample: {
        overflow: 'hidden',
        fontSize: 0,
      },
      listGridExampleTile: {
        position: 'relative',
        float: 'left',
        margin: 8,
        background: palette.neutralLighter,
      },
      listGridExampleSizer: {
        paddingBottom: '100%',
      },
      listGridExamplePadder: {
        position: 'absolute',
        inset: 2,
      },
      listGridExampleLabel: {
        background: 'rgba(0,0,0,0.3)',
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        fontSize: fonts.small.fontSize,
      },
      listGridExampleImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    })
  }

  const ProductCards = ({ items }) => {
    const columnCount = useRef(0)
    const rowHeight = useRef(0)
    const theme = useTheme()
    const classNames = useMemo(() => generateStyles(theme), [theme])
    const { addToCart } = useContext(CartContext)

    const getItemCountForPage = useCallback((index, rect) => {
      if (index === 0) {
        columnCount.current = Math.max(1, Math.floor(rect.width / 250))
        rowHeight.current = Math.floor(rect.width / columnCount.current)
      }
      return columnCount.current * 3
    }, [])

    const getPageHeight = useCallback(() => rowHeight.current * 3, [])

    const onRenderCell = (item) => (
      <div
        className={classNames.listGridExampleTile}
        style={{
          width: `calc(${100 / Math.max(1, columnCount.current)}% - 16px)`,
        }}
      >
        <div className={classNames.listGridExampleSizer}>
          <div className={classNames.listGridExamplePadder}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} className={classNames.listGridExampleImage} />
            </Link>

            <div className={classNames.listGridExampleLabel}>
              <span>{item.name}</span>
              <br />
              <strong>${Number(item.price).toFixed(2)}</strong>
            </div>

            <button
              onClick={() => addToCart(item)}
              style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                background: '#0078d4',
                color: '#fff',
                border: 'none',
                padding: 6,
                cursor: 'pointer',
              }}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    )

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

  return (
    <div className="body-container">
      {/* CAROUSEL */}
      <div className="carousel">
        <div
          className="carousel-content"
          style={{ backgroundImage: `url(${currentItem.image})` }}
        >
          <div className="carousel-overlay"></div>

          <div className="carousel-text">
            <h2>{currentItem.title}</h2>
            <p>{currentItem.description}</p>

            <Link to="/categoria/todos" className="carousel-button-cta">
              Ver productos
            </Link>
          </div>
        </div>
          <button 
            className="carousel-button carousel-button-prev" 
            onClick={handlePrev}
          >
            <Icon iconName="ChevronLeft" />
          </button>

          <button 
            className="carousel-button carousel-button-next" 
            onClick={handleNext}
          >
            <Icon iconName="ChevronRight" />
          </button>
      </div>
      <WeatherRecommendations />
      {/* BOTÓN PARA MOSTRAR PRODUCTOS */}
      <div className="containerCards">
        <div className="top">
          <h2>Productos Destacados</h2>

        <button
          className="toggle-products-btn"
          onClick={() => setMostrarProductos(!mostrarProductos)}
        >
          {mostrarProductos ? 'Ocultar productos' : 'Mostrar productos destacados'}
        </button>
        </div>

        {mostrarProductos && (
          <div className="cards">
            <ProductCards items={productosAMostrar} />
          </div>
        )}
      </div>
    </div>
  )
}