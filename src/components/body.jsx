import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@fluentui/react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
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
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(null)
  const [showNext, setShowNext] = useState(false)

  const currentSlideRef = useRef(null)
  const nextSlideRef = useRef(null)
  const indexRef = useRef(0)
  const isAnimatingRef = useRef(false)

  const animate = (direction) => {
    if (isAnimatingRef.current) return

    const newIndex =
      direction === 'next'
        ? (indexRef.current + 1) % carouselItems.length
        : (indexRef.current - 1 + carouselItems.length) % carouselItems.length

    const enterFrom = direction === 'next' ? '100%' : '-100%'
    const exitTo = direction === 'next' ? '-100%' : '100%'

    isAnimatingRef.current = true
    setIsAnimating(true)
    setNextIndex(newIndex)

    // Pre-cargar imagen antes de iniciar la animación
    const img = new Image()
    img.src = carouselItems[newIndex].image

    const startAnimation = () => {
      setShowNext(true)

      setTimeout(() => {
        if (!nextSlideRef.current || !currentSlideRef.current) return

        const textEl = nextSlideRef.current.querySelector('.carousel-text')

        gsap.set(nextSlideRef.current, { x: enterFrom, zIndex: 2, visibility: 'visible' })
        gsap.set(currentSlideRef.current, { zIndex: 1 })
        if (textEl) gsap.set(textEl, { opacity: 0, y: 20 })

        const tl = gsap.timeline({
          onComplete: () => {
            indexRef.current = newIndex
            setDisplayIndex(newIndex)
            setShowNext(false)
            setNextIndex(null)
            isAnimatingRef.current = false
            setIsAnimating(false)
            gsap.set(currentSlideRef.current, { clearProps: 'all' })
          },
        })

        tl.to(currentSlideRef.current, {
          x: exitTo,
          duration: 0.75,
          ease: 'power2.inOut',
        })

        tl.to(
          nextSlideRef.current,
          { x: '0%', duration: 0.75, ease: 'power2.inOut' },
          '<'
        )

        if (textEl) {
          tl.to(
            textEl,
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            '-=0.25'
          )
        }
      }, 20)
    }

    if (img.complete) {
      startAnimation()
    } else {
      img.onload = startAnimation
      img.onerror = startAnimation // Si falla la carga, animar igual
    }
  }

  // Pre-cargar todas las imágenes al montar el componente
  useEffect(() => {
    carouselItems.forEach((item) => {
      const img = new Image()
      img.src = item.image
    })
  }, [])

  // Auto-rotación cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      animate('next')
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => animate('prev')
  const handleNext = () => animate('next')

  const currentItem = carouselItems[displayIndex]
  const nextItem = nextIndex !== null ? carouselItems[nextIndex] : null

  return (
    <div className="body-container">
      <div className="carousel" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Slide ACTUAL */}
        <div
          ref={currentSlideRef}
          className="carousel-content"
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: 1,
          }}
        >
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${currentItem.image})` }}
          />
          <div className="carousel-overlay" />
          <div className="carousel-text">
            <h2>{currentItem.title}</h2>
            <p>{currentItem.description}</p>
            <Link to="/categoria/todos" className="carousel-button-cta">
              Ver productos
            </Link>
          </div>
        </div>

        {/* Slide SIGUIENTE — nace oculto */}
        {showNext && nextItem && (
          <div
            ref={nextSlideRef}
            className="carousel-content"
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              zIndex: 2,
              visibility: 'hidden',
            }}
          >
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${nextItem.image})` }}
            />
            <div className="carousel-overlay" />
            <div
              className="carousel-text"
              style={{ opacity: 0 }}
            >
              <h2>{nextItem.title}</h2>
              <p>{nextItem.description}</p>
              <Link to="/categoria/todos" className="carousel-button-cta">
                Ver productos
              </Link>
            </div>
          </div>
        )}

        {/* Botones navegación */}
        <button
          className="carousel-button carousel-button-prev"
          onClick={handlePrev}
          aria-label="Anterior"
          disabled={isAnimating}
          style={{ zIndex: 10 }}
        >
          <Icon iconName="ChevronLeft" />
        </button>
        <button
          className="carousel-button carousel-button-next"
          onClick={handleNext}
          aria-label="Siguiente"
          disabled={isAnimating}
          style={{ zIndex: 10 }}
        >
          <Icon iconName="ChevronRight" />
        </button>

        {/* Indicadores */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10,
        }}>
          {carouselItems.map((_, i) => (
            <span
              key={i}
              onClick={() => {
                if (!isAnimatingRef.current && i !== indexRef.current) {
                  animate(i > indexRef.current ? 'next' : 'prev')
                }
              }}
              style={{
                width: i === displayIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === displayIndex ? '#fff' : 'rgba(255,255,255,0.45)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      <WeatherCarousel />
    </div>
  )
}