import React, { createContext, useState, useCallback } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
      )
    }
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}