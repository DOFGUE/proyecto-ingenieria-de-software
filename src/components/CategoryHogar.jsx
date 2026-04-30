import React, { useRef, useCallback, useMemo, useContext } from 'react'
import { FocusZone, List, mergeStyleSets, useTheme, ThemeProvider, initializeIcons } from '@fluentui/react'
import { Link } from 'react-router-dom'
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
      selectors: {
        'focus:after': {
          content: "''",
          position: 'absolute',
          left: 2,
          right: 2,
          top: 2,
          bottom: 2,
          boxSizing: 'border-box',
          border: `1px solid ${palette.white}`,
        },
      },
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

const CategoryHogar = () => {
  const productosCat = products.filter(p => p.categoria === 'Hogar')

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
                    <span className={classNames.listGridExamplePrice}>${Number(item.price).toFixed(2)}</span>
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
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        )
      },
      [classNames, addToCart],
    )

    const getPageHeight = useCallback(() => {
      return rowHeight.current * 3
    }, [])

    const mappedItems = useMemo(() => items.map((p) => ({ key: p.id, id: p.id, name: p.name, image: p.image, price: p.price, description: p.description })), [items])

    return (
      <ThemeProvider>
        <FocusZone>
          <List
            className={classNames.listGridExample}
            items={mappedItems}
            getItemCountForPage={getItemCountForPage}
            getPageHeight={getPageHeight}
            renderedWindowsAhead={4}
            onRenderCell={onRenderCell}
          />
        </FocusZone>
      </ThemeProvider>
    )
  }

  return (
    <div className="body-container" style={{ padding: 32 }}>
      <div className='top'>
        <h2>Productos para el Hogar</h2>
        <Link to="/">Volver</Link>
      </div>
      <div className='cards' style={{ marginTop: 24 }}>
        <ProductCards items={productosCat} />
      </div>
    </div>
  )
}

export default CategoryHogar