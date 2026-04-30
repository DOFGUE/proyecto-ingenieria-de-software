import React, { useState, useContext } from 'react'
import { TextField, PrimaryButton, DefaultButton, Stack } from '@fluentui/react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './css/FinalizarCompra.css'

const FinalizarCompra = () => {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext)
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [isCompraConfirmada, setIsCompraConfirmada] = useState(false)
  const [purchaseData, setPurchaseData] = useState(null)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    pais: '',
    numeroTarjeta: '',
    nombreTarjeta: '',
    fechaExpiracion: '',
    cvc: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    // Si es teléfono, solo permitir números
    if (name === 'telefono') {
      const soloNumeros = value.replace(/[^0-9]/g, '')
      setFormData({ ...formData, [name]: soloNumeros })
    } else {
      setFormData({ ...formData, [name]: value })
    }
    
    // Limpiar error del campo cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateStep = () => {
    const newErrors = {}

    if (currentStep === 1) {
      if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido'
      if (!formData.email.trim()) newErrors.email = 'El email es requerido'
      else if (!validateEmail(formData.email)) newErrors.email = 'El email debe tener un formato válido (ej: usuario@ejemplo.com)'
      if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido'
      else if (formData.telefono.length < 7) newErrors.telefono = 'El teléfono debe tener al menos 7 dígitos'
    } else if (currentStep === 2) {
      if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es requerida'
      if (!formData.ciudad.trim()) newErrors.ciudad = 'La ciudad es requerida'
      if (!formData.codigoPostal.trim()) newErrors.codigoPostal = 'El código postal es requerido'
      if (!formData.pais.trim()) newErrors.pais = 'El país es requerido'
    } else if (currentStep === 3) {
      if (!formData.numeroTarjeta.trim()) newErrors.numeroTarjeta = 'El número de tarjeta es requerido'
      if (!formData.nombreTarjeta.trim()) newErrors.nombreTarjeta = 'El nombre en la tarjeta es requerido'
      if (!formData.fechaExpiracion.trim()) newErrors.fechaExpiracion = 'La fecha de expiración es requerida'
      if (!formData.cvc.trim()) newErrors.cvc = 'El CVC es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep() && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const handleConfirm = () => {
    if (validateStep()) {
      // Guardar datos de la compra
      setPurchaseData({
        formData,
        cartItems,
        total: getTotalPrice(),
        fecha: new Date().toLocaleDateString('es-ES'),
        hora: new Date().toLocaleTimeString('es-ES'),
        numeroOrden: Math.floor(Math.random() * 1000000),
      })
      setIsCompraConfirmada(true)
      // Limpiar carrito después de confirmar
      clearCart()
    }
  }

  return (
    <div className="finalizar-compra-container">
      {isCompraConfirmada && purchaseData ? (
        // VISTA DE RECIBO
        <div className="receipt-container">
          <div className="receipt-header">
            <h1 className="receipt-title">¡Compra Confirmada!</h1>
            <p className="receipt-subtitle">Gracias por tu compra</p>
          </div>

          <div className="receipt-content">
            <div className="receipt-order-info">
              <div className="receipt-info-item">
                <span className="receipt-label">Número de Orden:</span>
                <span className="receipt-value">#{purchaseData.numeroOrden}</span>
              </div>
              <div className="receipt-info-item">
                <span className="receipt-label">Fecha:</span>
                <span className="receipt-value">{purchaseData.fecha}</span>
              </div>
              <div className="receipt-info-item">
                <span className="receipt-label">Hora:</span>
                <span className="receipt-value">{purchaseData.hora}</span>
              </div>
            </div>

            <div className="receipt-section">
              <h2 className="receipt-section-title">Información de Envío</h2>
              <div className="receipt-info-block">
                <p><strong>{purchaseData.formData.nombre}</strong></p>
                <p>{purchaseData.formData.direccion}</p>
                <p>{purchaseData.formData.ciudad}, {purchaseData.formData.codigoPostal}</p>
                <p>{purchaseData.formData.pais}</p>
              </div>
            </div>

            <div className="receipt-section">
              <h2 className="receipt-section-title">Contacto</h2>
              <div className="receipt-info-block">
                <p>Email: {purchaseData.formData.email}</p>
                <p>Teléfono: {purchaseData.formData.telefono}</p>
              </div>
            </div>

            <div className="receipt-section">
              <h2 className="receipt-section-title">Productos Comprados</h2>
              <div className="receipt-items">
                {purchaseData.cartItems.map((item) => (
                  <div key={item.id} className="receipt-item">
                    <div className="receipt-item-info">
                      <p className="receipt-item-name">{item.name}</p>
                      <p className="receipt-item-detail">Cantidad: {item.quantity} x €{item.price.toFixed(2)}</p>
                    </div>
                    <p className="receipt-item-price">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="receipt-summary">
              <div className="receipt-summary-item">
                <span>Subtotal:</span>
                <span>€{purchaseData.total.toFixed(2)}</span>
              </div>
              <div className="receipt-summary-item">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <div className="receipt-summary-total">
                <span>Total:</span>
                <span>€{purchaseData.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="receipt-buttons">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <PrimaryButton text="Volver al Inicio" style={{ width: '100%' }} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // VISTA DE FORMULARIO
        <>
          <h1 className="finalizar-compra-title">Finalizar Compra</h1>

      {/* Pasos */}
      <div className="steps-container">
        {['Datos', 'Dirección', 'Pago'].map((paso, index) => (
          <div key={index} className="step-item">
            <div
              className={`step-number ${
                currentStep > index + 1 ? 'completed' : currentStep === index + 1 ? 'active' : ''
              }`}
            >
              {index + 1}
            </div>
            <span className={`step-label ${currentStep >= index + 1 ? 'active' : ''}`}>{paso}</span>
            {index < 2 && (
              <div
                className={`step-divider ${
                  currentStep > index + 1 ? 'completed' : currentStep > index ? 'active' : ''
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="checkout-grid">
        {/* Formulario */}
        <div className="form-container">
          {currentStep === 1 && (
            <div>
              <h2 className="form-title">
                <span className="form-icon">👤</span>
                Datos Personales
              </h2>
              <Stack tokens={{ childrenGap: 15 }}>
                <TextField
                  label="Nombre completo"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  errorMessage={errors.nombre}
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  errorMessage={errors.email}
                  required
                />
                <TextField
                  label="Teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  type="tel"
                  errorMessage={errors.telefono}
                  required
                />
              </Stack>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="form-title">
                <span className="form-icon">📍</span>
                Dirección de Envío
              </h2>
              <Stack tokens={{ childrenGap: 15 }}>
                <TextField
                  label="Dirección"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  errorMessage={errors.direccion}
                  required
                />
                <TextField
                  label="Ciudad"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  errorMessage={errors.ciudad}
                  required
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <TextField
                    label="Código Postal"
                    name="codigoPostal"
                    value={formData.codigoPostal}
                    onChange={handleInputChange}
                    errorMessage={errors.codigoPostal}
                    required
                  />
                  <TextField
                    label="País"
                    name="pais"
                    value={formData.pais}
                    onChange={handleInputChange}
                    errorMessage={errors.pais}
                    required
                  />
                </div>
              </Stack>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="form-title">
                <span className="form-icon">💳</span>
                Información de Pago
              </h2>
              <Stack tokens={{ childrenGap: 15 }}>
                <TextField
                  label="Número de Tarjeta"
                  name="numeroTarjeta"
                  value={formData.numeroTarjeta}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  errorMessage={errors.numeroTarjeta}
                  required
                />
                <TextField
                  label="Nombre en la Tarjeta"
                  name="nombreTarjeta"
                  value={formData.nombreTarjeta}
                  onChange={handleInputChange}
                  errorMessage={errors.nombreTarjeta}
                  required
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <TextField
                    label="Fecha de Expiración"
                    name="fechaExpiracion"
                    value={formData.fechaExpiracion}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    errorMessage={errors.fechaExpiracion}
                    required
                  />
                  <TextField
                    label="CVC"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="123"
                    errorMessage={errors.cvc}
                    required
                  />
                </div>
              </Stack>
            </div>
          )}

          {/* Botones de navegación */}
          <div className="form-buttons">
            <DefaultButton
              text="Atrás"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            />
            {currentStep < 3 ? (
              <PrimaryButton
                text="Continuar"
                onClick={handleNext}
              />
            ) : (
              <PrimaryButton
                text="Confirmar Compra"
                onClick={handleConfirm}
              />
            )}
          </div>
        </div>

        {/* Resumen del Pedido */}
        <div className="order-summary">
          <h3 className="summary-title">Resumen del Pedido</h3>

          {cartItems.length === 0 ? (
            <p className="summary-empty">Tu carrito está vacío</p>
          ) : (
            <>
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <div className="summary-item-info">
                      <p className="summary-item-name">{item.name}</p>
                      <p className="summary-item-quantity">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="summary-item-price">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="summary-subtotal">
                <span>Subtotal</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-shipping">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  )
}

export default FinalizarCompra