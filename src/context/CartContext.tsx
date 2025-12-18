import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import type { CartItem, Product, ProductVariant } from '@/types'

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; variant?: ProductVariant; size: string; color: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_CART_OPEN'; payload: boolean }
  | { type: 'LOAD_CART'; payload: CartItem[] }

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  itemCount: number
  subtotal: number
  addItem: (product: Product, size: string, color: string, quantity?: number, variant?: ProductVariant) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  setCartOpen: (open: boolean) => void
  getItemQuantity: (productId: string, size: string, color: string) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'cherry-bay-cart'

function generateCartItemId(productId: string, size: string, color: string): string {
  return `${productId}-${size}-${color}`
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, size, color, quantity } = action.payload
      const itemId = generateCartItemId(product.id, size, color)
      const existingItemIndex = state.items.findIndex((item) => item.id === itemId)

      if (existingItemIndex > -1) {
        // Update existing item quantity
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        }
        return { ...state, items: updatedItems }
      }

      // Add new item
      const newItem: CartItem = {
        id: itemId,
        product,
        variant,
        size,
        color,
        quantity,
      }
      return { ...state, items: [...state.items, newItem] }
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      }
    }

    case 'CLEAR_CART': {
      return { ...state, items: [] }
    }

    case 'TOGGLE_CART': {
      return { ...state, isOpen: !state.isOpen }
    }

    case 'SET_CART_OPEN': {
      return { ...state, isOpen: action.payload }
    }

    case 'LOAD_CART': {
      return { ...state, items: action.payload }
    }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  })

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        const items = JSON.parse(savedCart) as CartItem[]
        dispatch({ type: 'LOAD_CART', payload: items })
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }, [state.items])

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  const subtotal = state.items.reduce((total, item) => {
    const price = item.variant?.priceAdjustment
      ? item.product.price + item.variant.priceAdjustment
      : item.product.price
    return total + price * item.quantity
  }, 0)

  const addItem = (
    product: Product,
    size: string,
    color: string,
    quantity: number = 1,
    variant?: ProductVariant
  ) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, variant, size, color, quantity },
    })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const setCartOpen = (open: boolean) => {
    dispatch({ type: 'SET_CART_OPEN', payload: open })
  }

  const getItemQuantity = (productId: string, size: string, color: string): number => {
    const itemId = generateCartItemId(productId, size, color)
    const item = state.items.find((item) => item.id === itemId)
    return item?.quantity || 0
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        itemCount,
        subtotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        setCartOpen,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
