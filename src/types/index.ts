// Product Types
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription?: string
  price: number
  comparePrice?: number
  category: ProductCategory
  style?: string
  collection?: string
  sizes: string[]
  availableSizes: Record<string, number>
  colors: string[]
  colorHex: Record<string, string>
  pattern?: string
  material?: string
  careInstructions?: string
  isTop: boolean
  isBottom: boolean
  isSet: boolean
  matchingProducts: string[]
  images: string[]
  videoUrl?: string
  inStock: boolean
  totalStock: number
  lowStockThreshold: number
  featured: boolean
  bestseller: boolean
  newArrival: boolean
  onSale: boolean
  metaTitle?: string
  metaDescription?: string
  createdAt: string
  updatedAt: string
}

export type ProductCategory =
  | 'bikini-top'
  | 'bikini-bottom'
  | 'one-piece'
  | 'cover-up'
  | 'accessory'

export interface ProductVariant {
  id: string
  productId: string
  size: string
  color: string
  sku: string
  stockQuantity: number
  priceAdjustment: number
}

// Cart Types
export interface CartItem {
  id: string
  product: Product
  variant?: ProductVariant
  size: string
  color: string
  quantity: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  discountCode?: string
  discountAmount: number
  shippingCost: number
  total: number
}

// Customer Types
export interface Customer {
  id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  newsletterSubscribed: boolean
  smsSubscribed: boolean
  totalOrders: number
  totalSpent: number
  createdAt: string
  updatedAt: string
}

export interface Address {
  id: string
  customerId: string
  type: 'shipping' | 'billing'
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postcode: string
  country: string
  phone?: string
  isDefault: boolean
}

// Order Types
export interface Order {
  id: string
  orderNumber: string
  customerId?: string
  customerEmail: string
  status: OrderStatus
  paymentStatus: PaymentStatus
  fulfillmentStatus: FulfillmentStatus
  paymentMethod: 'stripe' | 'paypal'
  paymentIntentId?: string
  paypalOrderId?: string
  subtotal: number
  discountAmount: number
  discountCode?: string
  shippingCost: number
  tax: number
  total: number
  shippingAddress: Address
  billingAddress: Address
  shippingMethod?: string
  trackingNumber?: string
  trackingUrl?: string
  shippedAt?: string
  deliveredAt?: string
  notes?: string
  adminNotes?: string
  createdAt: string
  updatedAt: string
}

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentStatus =
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'

export type FulfillmentStatus =
  | 'unfulfilled'
  | 'partial'
  | 'fulfilled'

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  variantId?: string
  productName: string
  productSlug: string
  productImage: string
  size: string
  color: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

// Discount Types
export interface DiscountCode {
  id: string
  code: string
  description?: string
  discountType: 'percentage' | 'fixed_amount' | 'free_shipping'
  discountValue: number
  minimumPurchase: number
  maxUses?: number
  maxUsesPerCustomer: number
  applicableProducts: string[]
  applicableCategories: string[]
  startsAt: string
  expiresAt?: string
  isActive: boolean
  timesUsed: number
  createdAt: string
}

// Review Types
export interface Review {
  id: string
  productId: string
  customerId?: string
  orderId?: string
  rating: number
  title?: string
  content?: string
  sizePurchased?: string
  fitRating?: 'runs_small' | 'true_to_size' | 'runs_large'
  images: string[]
  isVerifiedPurchase: boolean
  isApproved: boolean
  createdAt: string
}

// Collection Types
export interface Collection {
  id: string
  name: string
  slug: string
  description?: string
  heroImage?: string
  bannerText?: string
  isActive: boolean
  startDate?: string
  endDate?: string
  displayOrder: number
}

// Category Types
export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  imageUrl?: string
  parentId?: string
  displayOrder: number
}

// Newsletter Types
export interface NewsletterSubscriber {
  id: string
  email: string
  firstName?: string
  source: 'popup' | 'footer' | 'checkout'
  subscribedAt: string
  unsubscribedAt?: string
}

// Wishlist Types
export interface WishlistItem {
  id: string
  customerId: string
  productId: string
  variantId?: string
  createdAt: string
}

// Abandoned Cart Types
export interface AbandonedCart {
  id: string
  customerId?: string
  email?: string
  cartItems: CartItem[]
  cartTotal: number
  reminderSentAt?: string
  reminderCount: number
  recovered: boolean
  recoveredOrderId?: string
  createdAt: string
  updatedAt: string
}
