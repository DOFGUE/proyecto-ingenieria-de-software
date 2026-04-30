import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import './css/body.css'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => String(p.id) === String(id))

  if (!product) {
    return (
      <div className="body-container" style={{ padding: 32 }}>
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver</Link>
      </div>
    )
  }

  return (
    <div className="body-container" style={{ padding: 32 }}>
      <div className="top">
        <h2>{product.name}</h2>
        <Link to="/">Volver</Link>
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 16, alignItems: 'flex-start' }}>
        <div style={{ width: 400, height: 400, background: '#f5f5f5' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ maxWidth: 720 }}>
          <h3 style={{ marginTop: 0 }}>${Number(product.price).toFixed(2)}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail