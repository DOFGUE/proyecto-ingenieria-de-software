import React from 'react'
import './css/about.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre nuestra tienda y nuestro compromiso con la calidad</p>
      </div>

      <div className="about-section">
        <h2>Nuestra Historia</h2>
        <p>
          Fundada en 2020, nuestra cacharrería ha sido el destino de confianza para los residentes locales
          que buscan productos de calidad para el hogar, la limpieza y la oficina. Comenzamos como un pequeño
          negocio familiar con la visión de ofrecer productos esenciales a precios accesibles.
        </p>
      </div>

      <div className="about-section">
        <h2>Nuestra Misión</h2>
        <p>
          Proporcionar a nuestros clientes una amplia gama de productos de alta calidad, desde artículos de
          limpieza hasta herramientas para el hogar, con un servicio excepcional y precios competitivos.
          Nos esforzamos por ser el vecino de confianza que todos necesitan.
        </p>
      </div>

      <div className="about-section">
        <h2>Lo Que Ofrecemos</h2>
        <ul>
          <li>Productos de limpieza y desinfección</li>
          <li>Artículos de papelería y oficina</li>
          <li>Herramientas y accesorios para el hogar</li>
          <li>Variedad de productos esenciales</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Contáctanos</h2>
        <p>
          Visítanos en nuestra tienda local o contáctanos para cualquier consulta. Estamos aquí para ayudarte.
        </p>
      </div>
    </div>
  )
}

export default About
