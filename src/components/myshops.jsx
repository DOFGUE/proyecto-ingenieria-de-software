import { Icon } from '@fluentui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/myshops.css'

// Compras mockeadas estáticas
const MOCK_PURCHASES = [
  {
    id: 'ORD-001',
    fecha: '2026-04-15',
    estado: 'Entregado',
    total: 24500,
    items: [
      { nombre: 'Detergente Ariel 1kg', cantidad: 2, precio: 8500 },
      { nombre: 'Jabón Rey Pack x6', cantidad: 1, precio: 7500 },
    ]
  },
  {
    id: 'ORD-002',
    fecha: '2026-04-20',
    estado: 'En proceso',
    total: 18700,
    items: [
      { nombre: 'Cloro Zap 1L', cantidad: 3, precio: 4200 },
      { nombre: 'Escoba mágica', cantidad: 1, precio: 6100 },
    ]
  },
  {
    id: 'ORD-003',
    fecha: '2026-04-25',
    estado: 'Pendiente',
    total: 32400,
    items: [
      { nombre: 'Papel Kraff 50m', cantidad: 2, precio: 6800 },
      { nombre: 'Baterías Duracell AA', cantidad: 1, precio: 12000 },
      { nombre: 'Velas aromáticas', cantidad: 1, precio: 6800 },
    ]
  },
  {
    id: 'ORD-004',
    fecha: '2026-04-28',
    estado: 'Entregado',
    total: 15800,
    items: [
      { nombre: 'Servilletas Elite x100', cantidad: 1, precio: 5800 },
      { nombre: 'Pinzas de cocina', cantidad: 1, precio: 10000 },
    ]
  },
]

const MyShops = () => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'Entregado': return 'estado-entregado'
      case 'En proceso': return 'estado-proceso'
      case 'Pendiente': return 'estado-pendiente'
      default: return ''
    }
  }

  const getEstadoIcon = (estado) => {
    switch (estado) {
      case 'Entregado': return 'CheckMark'
      case 'En proceso': return 'Sync'
      case 'Pendiente': return 'Clock'
      default: return 'CircleRing'
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value)
  }

  if (isLoggedIn !== 1) {
    return (
      <div className="myshops-container">
        <div className="myshops-card">
          <div className="myshops-error">
            <Icon iconName="Warning" />
            <h2>Acceso denegado</h2>
            <p>Debes iniciar sesión para ver tus compras.</p>
            <button
              className="myshops-login-btn"
              onClick={() => navigate('/login')}
            >
              Ir a iniciar sesión
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="myshops-container">
      <div className="myshops-header">
        <Link to="/" className="myshops-logo">
          TIENDA
        </Link>
        <h1 className="myshops-title">Mis Compras</h1>
        <p className="myshops-subtitle">Historial de tus pedidos</p>
      </div>

      <div className="myshops-list">
        {MOCK_PURCHASES.map((compra) => (
          <div key={compra.id} className="myshops-card">
            <div className="myshops-card-header">
              <div className="myshops-card-id">
                <span className="myshops-label">Pedido</span>
                <span className="myshops-value">{compra.id}</span>
              </div>
              <div className={`myshops-estado ${getEstadoColor(compra.estado)}`}>
                <Icon iconName={getEstadoIcon(compra.estado)} />
                <span>{compra.estado}</span>
              </div>
            </div>

            <div className="myshops-card-body">
              <div className="myshops-fecha">
                <Icon iconName="Calendar" />
                <span>{new Date(compra.fecha).toLocaleDateString('es-CO', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>

              <div className="myshops-items">
                {compra.items.map((item, index) => (
                  <div key={index} className="myshops-item">
                    <span className="myshops-item-cantidad">{item.cantidad}x</span>
                    <span className="myshops-item-nombre">{item.nombre}</span>
                    <span className="myshops-item-precio">{formatCurrency(item.precio)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="myshops-card-footer">
              <div className="myshops-total">
                <span className="myshops-label">Total</span>
                <span className="myshops-total-value">{formatCurrency(compra.total)}</span>
              </div>
              <button className="myshops-details-btn">
                Ver detalles
                <Icon iconName="ChevronRight" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="myshops-back">
        <Icon iconName="Back" />
        <span>Volver a la tienda</span>
      </Link>
    </div>
  )
}

export default MyShops