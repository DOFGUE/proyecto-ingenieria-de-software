import React, { useContext } from 'react'
import { Panel, PanelType } from '@fluentui/react/lib/Panel'
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './css/ShippingCart.css'

const ShoppingCart = ({ isOpen, dismissPanel }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext)

  const handleFinalizarCompra = () => {
    dismissPanel()
  }

  const handleContinuarComprando = () => {
    dismissPanel()
  }

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={dismissPanel}
      headerText="Carrito de Compras"
      closeButtonAriaLabel="Cerrar"
      isLightDismiss={true}
      type={PanelType.smallFixedFar}
      isBlocking={true}
      hasCloseButton={true}
      className="cart-panel"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        
        {/* CONTENIDO */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: 24 }}>
          {cartItems.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', paddingTop: 40 }}>
              Tu carrito está vacío
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">

                {/* IMAGEN */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />

                {/* INFO */}
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p className="cart-price">${item.price.toFixed(2)}</p>

                  {/* CONTROLES */}
                  <div className="cart-controls">
                    
                    <button
                      className="cart-btn minus"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>

                    <span className="cart-qty">{item.quantity}</span>

                    <button
                      className="cart-btn plus"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                    <button
                      className="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* TOTAL */}
        <div className="cart-total">
          <div className="cart-total-row">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>

          {/* BOTONES */}
          <div className="cart-buttons">
            <Link to="/finalizar-compra" style={{ textDecoration: 'none' }}>
              <PrimaryButton
                text="Finalizar Compra"
                onClick={handleFinalizarCompra}
                disabled={cartItems.length === 0}
                className="cart-primary"
              />
            </Link>

            <DefaultButton
              text="Continuar Comprando"
              onClick={handleContinuarComprando}
              className="cart-secondary"
            />
          </div>
        </div>

      </div>
    </Panel>
  )
}

export default ShoppingCart