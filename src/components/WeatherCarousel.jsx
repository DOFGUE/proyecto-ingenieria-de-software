import React, { useRef, useEffect, useState, useContext } from 'react'
import gsap from 'gsap'
import { useWeatherRecommendations } from '../hooks/useWeatherRecommendations'
import { CartContext } from '../context/CartContext'
import products from '../data/products'
import { Link } from 'react-router-dom'
import './css/WeatherCarousel.css'

export const WeatherCarousel = () => {
  const { weather, recommendation, loading } = useWeatherRecommendations()
  const { addToCart } = useContext(CartContext)
  const carouselRef = useRef(null)
  const tlRef = useRef(null)

  const recommendedProducts = products.filter((p) =>
    recommendation.productIds.includes(p.id)
  )

  const totalProducts = recommendedProducts.length

  // Rotación continua constante del cilindro
  useEffect(() => {
    if (!carouselRef.current || totalProducts === 0) return

    const tl = gsap.timeline({ repeat: -1 })
    
    tl.to(carouselRef.current, {
      rotationY: 360,
      duration: 24, // Una vuelta completa en 24 segundos
      ease: 'none', // Velocidad constante
    })

    tlRef.current = tl

    return () => {
      tl.kill()
    }
  }, [totalProducts])

  const handleMouseEnter = () => {
    if (tlRef.current) {
      tlRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    if (tlRef.current) {
      tlRef.current.resume()
    }
  }

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>⏳ Cargando recomendaciones...</div>
  }

  if (totalProducts === 0) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>No hay productos disponibles</div>
  }

  const anglePerProduct = 360 / totalProducts
  const radius = totalProducts > 8 ? 600 : totalProducts > 6 ? 500 : totalProducts > 4 ? 400 : 350

  return (
    <div className="weather-carousel-container">
      <div className="carousel-header">
        <h2>{recommendation.title}</h2>
        <p>{recommendation.subtitle}</p>
        {weather && weather.main && (
          <p className="weather-temp-info">
            🌡️ {weather.main.temp}°C - {weather.weather[0].description}
          </p>
        )}
      </div>

      <div className="carousel-3d-wrapper">
        <div
          ref={carouselRef}
          className="carousel-3d"
          style={{
            '--radius': `${radius}px`,
          }}
        >
          {recommendedProducts.map((product, index) => {
            const angle = (index * anglePerProduct)
            return (
              <div
                key={product.id}
                className="carousel-3d-item"
                style={{
                  '--item-angle': `${angle}deg`,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-flip">
                  {/* FRENTE - Imagen */}
                  <div className="card-front">
                    <img src={product.image} alt={product.name} />
                  </div>

                  {/* REVERSO - Descripción */}
                  <div className="card-back">
                    <div className="card-back-content">
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <div className="card-back-footer">
                        <span className="card-price">${Number(product.price).toFixed(0)}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="card-add-btn"
                        >
                          Añadir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
