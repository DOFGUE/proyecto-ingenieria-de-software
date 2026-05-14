import React, { useState, useEffect } from 'react'
import { Icon } from '@fluentui/react'
import { Link } from 'react-router-dom'
import limpieza from './image/limpieza.jpg'
import hogar from './image/hogar.jpg'
import oficina from './image/oficina.jpg'
import './css/body.css'
import { WeatherCarousel } from './WeatherCarousel'

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
      <WeatherCarousel />
    </div>
  )
}