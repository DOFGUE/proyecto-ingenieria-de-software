import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import products from '../data/products'
import './css/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)
  const product = products.find((p) => String(p.id) === String(id))

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn-back">← Volver</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    // Opcional: mostrar confirmación o redirigir
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <Link to="/" className="btn-back">← Volver</Link>
      </div>

      <div className="product-detail-content">
        {/* GALERÍA DE IMAGEN */}
        <div className="product-gallery">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
        </div>

        {/* DETALLES DEL PRODUCTO */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-category">
            <span className="category-badge">{product.categoria}</span>
            {product.subcategoria && <span className="subcategory-badge">{product.subcategoria}</span>}
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-price-section">
            <div className="price-container">
              <span className="price-label">Precio</span>
              <span className="price-value">${Number(product.price).toFixed(0)}</span>
            </div>
            <div className="stock-info">
              <span className="stock-badge">En Stock</span>
            </div>
          </div>

          <div className="product-actions">
            <button onClick={handleAddToCart} className="btn-add-cart">
              <span className="btn-icon">🛒</span>
              Añadir al Carrito
            </button>
            <button onClick={() => navigate(-1)} className="btn-continue">
              Continuar Comprando
            </button>
          </div>

          <div className="product-features">
            <h3 className="features-title">Características</h3>
            <ul className="features-list">
              <li>✓ Calidad garantizada</li>
              <li>✓ Envío rápido</li>
              <li>✓ Devolución fácil</li>
              <li>✓ Mejor precio</li>
            </ul>
          </div>

          <div className="product-guarantee">
            <div className="guarantee-icon">🛡️</div>
            <div className="guarantee-text">
              <h4>Garantía de Satisfacción</h4>
              <p>Compra con confianza. Si no estás satisfecho, te devolvemos el dinero.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail