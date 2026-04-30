import React, { useContext } from 'react'
import { Panel, PanelType } from '@fluentui/react/lib/Panel'
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Icon } from '@fluentui/react'

const ShoppingCart = ({ isOpen, dismissPanel }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useContext(CartContext)

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
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Contenido del carrito */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: 24 }}>
          {cartItems.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', paddingTop: 40 }}>Tu carrito está vacío</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: 12,
                  marginBottom: 16,
                  padding: 12,
                  border: '1px solid #e0e0e0',
                  borderRadius: 4,
                }}
              >
                {/* Imagen */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }}
                />

                {/* Información */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: 14, fontWeight: 600 }}>{item.name}</h4>
                  <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: 12 }}>${item.price.toFixed(2)}</p>

                  {/* Controles de cantidad */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: 24,
                        height: 24,
                        border: '1px solid #0078d4',
                        background: 'white',
                        color: '#0078d4',
                        cursor: 'pointer',
                        borderRadius: 2,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      -
                    </button>
                    <span style={{ width: 30, textAlign: 'center', fontWeight: 600 }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: 24,
                        height: 24,
                        border: '1px solid #0078d4',
                        background: '#0078d4',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: 2,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        marginLeft: 'auto',
                        background: 'none',
                        border: 'none',
                        color: '#d13438',
                        cursor: 'pointer',
                        fontSize: 12,
                        textDecoration: 'underline',
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Línea divisoria */}
        <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: 12, marginBottom: 12 }}>
          {/* Total */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: 16, fontWeight: 700 }}>
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>

          {/* Botones */}
          <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
            <Link to="/finalizar-compra" style={{ textDecoration: 'none', color: 'inherit' }}>
              <PrimaryButton
                text="Finalizar Compra"
                onClick={handleFinalizarCompra}
                disabled={cartItems.length === 0}
                styles={{ root: { width: '100%' } }}
              />
            </Link>
            <DefaultButton
              text="Continuar Comprando"
              onClick={handleContinuarComprando}
              styles={{ root: { width: '100%' } }}
            />
          </div>
        </div>
      </div>
    </Panel>
  )
}

export default ShoppingCart