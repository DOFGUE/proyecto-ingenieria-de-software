import React, { useRef, useCallback, useMemo, useContext } from 'react'
import { FocusZone, List, mergeStyleSets, useTheme, ThemeProvider, initializeIcons } from '@fluentui/react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useWeatherRecommendations } from '../hooks/useWeatherRecommendations'
import products from '../data/products'
import './css/WeatherRecommendations.css'

initializeIcons()

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
      display: 'flex',
      flexDirection: 'column',
    },
    listGridExampleImage: {
      position: 'relative',
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
  })
}

export const WeatherRecommendations = () => {
  const { weather, recommendation, loading } = useWeatherRecommendations()
  const { addToCart } = useContext(CartContext)
  const columnCount = useRef(0)
  const rowHeight = useRef(0)
  const theme = useTheme()
  const classNames = useMemo(() => generateStyles(theme), [theme])

  const getItemCountForPage = useCallback((index, rect) => {
    if (index === 0) {
      columnCount.current = Math.max(1, Math.floor(rect.width / 250))
      rowHeight.current = Math.floor(rect.width / columnCount.current) + 120
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
      <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
        <img src={item.image} alt={item.name} className={classNames.listGridExampleImage} />
      </Link>

      <div className="weather-card-content">
        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="weather-card-name">{item.name}</div>
          <div className="weather-card-description">{item.description}</div>
        </Link>

        <div className="weather-card-price">${Number(item.price).toFixed(0)}</div>

        <button
          onClick={() => addToCart(item)}
          className="weather-add-btn"
        >
          Añadir
        </button>
      </div>
    </div>
  )

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>⏳ Cargando recomendaciones...</div>
  }

  const recommendedProducts = products.filter((p) =>
    recommendation.productIds.includes(p.id)
  )

  return (
    <div className="weather-recommendations-container">
      <div className="weather-recommendations-header">
        <h2>{recommendation.title}</h2>
        <p>{recommendation.subtitle}</p>
        {weather && weather.main && (
          <p className="weather-temp-info">
            🌡️ {weather.main.temp}°C - {weather.weather[0].description}
          </p>
        )}
      </div>

      <ThemeProvider>
        <FocusZone>
          <List
            className={classNames.listGridExample}
            items={recommendedProducts}
            getItemCountForPage={getItemCountForPage}
            getPageHeight={getPageHeight}
            onRenderCell={onRenderCell}
          />
        </FocusZone>
      </ThemeProvider>
    </div>
  )
}