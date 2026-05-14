import React from 'react'
import './css/footer.css'
import { Link } from 'react-router-dom'

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
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/categoria/todos">Productos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="social-facebook">
              <svg className="social-logo-fb" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="social-instagram">
              <svg className="social-logo-ig" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.217.63c-.688.297-1.272.702-1.855 1.285-.583.583-.988 1.167-1.285 1.855-.297.688-.498 1.558-.557 2.836C.008 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.837.297.687.702 1.271 1.285 1.854.583.583 1.167.987 1.855 1.284.689.297 1.559.498 2.837.557C8.333 23.992 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.837-.558.687-.297 1.271-.702 1.854-1.285.583-.583.987-1.167 1.284-1.855.297-.689.498-1.559.557-2.837.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.558-2.837-.297-.687-.702-1.271-1.285-1.854-.583-.583-1.167-.987-1.855-1.284-.689-.297-1.559-.498-2.837-.557C15.667.008 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.408.56.217.96.477 1.382.896.419.42.679.822.896 1.381.164.422.354 1.057.408 2.227.06 1.264.07 1.646.07 4.849s-.01 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.56-.477.96-.896 1.382-.42.419-.822.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.06-1.646.07-4.849.07s-3.585-.01-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.822-.896-1.381-.164-.422-.354-1.057-.408-2.227-.06-1.264-.07-1.646-.07-4.849s.01-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.56.477-.96.896-1.382.42-.419.822-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.06 1.646-.07 4.849-.07z"/>
                <circle cx="12" cy="12" r="3.405"/>
                <circle cx="18.405" cy="5.595" r=".994"/>
              </svg>
              Instagram
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer noopener" aria-label="TikTok" className="social-tiktok">
              <svg className="social-logo-tt" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.889 2.889 0 0 1 2.31-4.64 2.889 2.889 0 0 1 .88.135v-3.26a5.884 5.884 0 0 0-1-.1A5.881 5.881 0 0 0 5.6 16.56a5.881 5.881 0 0 0 10.86-1.9V8.54a7.468 7.468 0 0 0 4.54-1.85z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Servicio al Cliente</h4>
          <ul>
            <li><a href="https://wa.me/3174865490" target="_blank" rel="noreferrer noopener">Contacto</a></li>
            <li><a href="https://wa.me/318393213" target="_blank" rel="noreferrer noopener">Soporte</a></li>
            <li><a href="https://wa.me/3116195290" target="_blank" rel="noreferrer noopener">Devoluciones</a></li>
            <li><a href="https://wa.me/3177296387" target="_blank" rel="noreferrer noopener">Preguntas Frecuentes</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 TIENDA. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer