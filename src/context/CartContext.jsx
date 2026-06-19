import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

/**
 * Global enquiry-cart state. Tracks items the visitor wants to hire and powers
 * the navbar cart badge + the cart drawer.
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [
        ...prev,
        { id: item.id, name: item.name, categoryLabel: item.categoryLabel, qty: 1 },
      ]
    })
  }, [])

  const removeItem = useCallback(
    (id) => setItems((prev) => prev.filter((i) => i.id !== id)),
    [],
  )
  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const count = items.reduce((sum, i) => sum + i.qty, 0)

  const value = {
    items,
    count,
    addItem,
    removeItem,
    clearCart,
    isOpen,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
