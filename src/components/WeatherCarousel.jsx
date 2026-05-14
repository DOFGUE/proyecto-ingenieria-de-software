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
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const itemsRef = useRef([])

  const recommendedProducts = products.filter((p) =>
    recommendation.productIds.includes(p.id)
  )

  const totalProducts = recommendedProducts.length

  useEffect(() => {
    if (itemsRef.current.length === 0 || totalProducts === 0) return

    // Limpiar refs viejos
    itemsRef.current = itemsRef.current.slice(0, 3)

    // Establecer estado inicial (desde los lados, transparente)
    gsap.set(itemsRef.current, { opacity: 0, x: (index) => {
      if (index === 0) return -60
      if (index === 1) return 0
      return 60
    }})

    // Animar deslizamiento horizontal suave
    gsap.to(itemsRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
    })
  }, [currentIndex, totalProducts])

  // Auto-cambio cada 5 segundos
  useEffect(() => {
    if (totalProducts === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProducts)
    }, 5000)

    return () => clearInterval(interval)
  }, [totalProducts])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProducts)
  }

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>⏳ Cargando recomendaciones...</div>
  }

  if (totalProducts === 0) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>No hay productos disponibles</div>
  }

  const getPrevIndex = () => (currentIndex - 1 + totalProducts) % totalProducts
  const getNextIndex = () => (currentIndex + 1) % totalProducts

  const prevProduct = recommendedProducts[getPrevIndex()]
  const currentProduct = recommendedProducts[currentIndex]
  const nextProduct = recommendedProducts[getNextIndex()]

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

      <div className="carousel-wrapper">
        {/* PRODUCTO ANTERIOR (IZQUIERDA) */}
        <div className="carousel-item carousel-side carousel-prev" ref={(el) => (itemsRef.current[0] = el)}>
          <div className="side-product">
            <img src={prevProduct.image} alt={prevProduct.name} />
            <p className="side-label">Anterior</p>
          </div>
        </div>

        {/* PRODUCTO PRINCIPAL (CENTRO) */}
        <div
          className="carousel-item carousel-center"
          ref={(el) => (itemsRef.current[1] = el)}
        >
          <div className="center-product">
            <Link to={`/product/${currentProduct.id}`} className="center-image-link">
              <img src={currentProduct.image} alt={currentProduct.name} />
            </Link>

            <div className="center-content">
              <Link to={`/product/${currentProduct.id}`} style={{ textDecoration: 'none' }}>
                <h3 className="center-name">{currentProduct.name}</h3>
                <p className="center-description">{currentProduct.description}</p>
              </Link>

              <div className="center-footer">
                <span className="center-price">${Number(currentProduct.price).toFixed(0)}</span>
                <button
                  onClick={() => addToCart(currentProduct)}
                  className="center-add-btn"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTO SIGUIENTE (DERECHA) */}
        <div className="carousel-item carousel-side carousel-next" ref={(el) => (itemsRef.current[2] = el)}>
          <div className="side-product">
            <img src={nextProduct.image} alt={nextProduct.name} />
            <p className="side-label">Siguiente</p>
          </div>
        </div>
      </div>

      {/* INDICADOR DE POSICIÓN */}
      <div className="carousel-indicator">
        {recommendedProducts.map((_, idx) => (
          <div
            key={idx}
            className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}
