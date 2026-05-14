import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@fluentui/react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
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
  const carouselContentRef = useRef(null)
  const currentImageRef = useRef(null)
  const nextImageRef = useRef(null)
  const carouselTextRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Animar cambio de imagen estilo Bootstrap Carousel
  useEffect(() => {
    if (!currentImageRef.current || !nextImageRef.current) return

    const currentItem = carouselItems[currentIndex]

    // PRIMERO: cambiar la imagen en currentImageRef
    currentImageRef.current.style.backgroundImage = `url(${currentItem.image})`
    
    // Resetear posición de la nueva imagen
    gsap.set(currentImageRef.current, { opacity: 0, x: 100 })

    // SEGUNDO: realizar la animación
    const tl = gsap.timeline()

    tl.to(currentImageRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power1.inOut',
    })

    // Limpiar nextImageRef
    gsap.set(nextImageRef.current, { opacity: 0, x: 100 })

    // Animar texto
    if (carouselTextRef.current) {
      gsap.fromTo(
        carouselTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.3 }
      )
    }
  }, [currentIndex])

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
        <div ref={carouselContentRef} className="carousel-content">
          {/* Imagen actual */}
          <div
            ref={currentImageRef}
            style={{ backgroundImage: `url(${currentItem.image})` }}
            className="carousel-image-layer"
          />
          
          {/* Imagen siguiente */}
          <div
            ref={nextImageRef}
            className="carousel-image-layer"
          />

          <div className="carousel-overlay"></div>

          <div ref={carouselTextRef} className="carousel-text">
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