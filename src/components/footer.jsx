import React from 'react'
import './footer.css'
import { Icon } from '@fluentui/react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>TIENDA</h4>
          <p>Tu destino para comprar de todo. Calidad garantizada y los mejores precios en el mercado.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="about">Sobre Nosotros</a></li>
            <li><a href="products">Productos</a></li>
            <li><a href="offers">Ofertas</a></li>
            <li><a href="blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Servicio al Cliente</h4>
          <ul>
            <li><a href="contact">Contacto</a></li>
            <li><a href="Productos">Productos</a></li>
            <li><a href="Ofertas">Ofertas</a></li>
            <li><a href="Blog">Blog</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 TIENDA. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
