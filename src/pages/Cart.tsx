import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart | Cherry Bay</title>
        </Helmet>
        <div className="container-wide py-20 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-sand-300" />
          <h1 className="mt-6 heading-2 text-charcoal">Your cart is empty</h1>
          <p className="mt-4 text-sand-600">Looks like you haven't added anything yet.</p>
          <Button asChild className="mt-8">
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </div>
      </>
    )
  }

  const shipping = subtotal >= 100 ? 0 : 12.95
  const total = subtotal + shipping

  return (
    <>
      <Helmet>
        <title>Shopping Cart | Cherry Bay</title>
      </Helmet>

      <div className="bg-cream min-h-screen">
        <div className="container-wide py-8 md:py-12">
          <h1 className="heading-2 text-charcoal">Shopping Cart</h1>

          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-4 md:p-6 flex gap-4"
                >
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="w-24 h-32 md:w-32 md:h-40 rounded-lg overflow-hidden bg-sand-100 shrink-0"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <Link
                          to={`/product/${item.product.slug}`}
                          className="font-medium text-charcoal hover:text-cherry-500"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-sm text-sand-600">
                          {item.color} / {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sand-400 hover:text-cherry-500 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border border-sand-300 rounded hover:bg-sand-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border border-sand-300 rounded hover:bg-sand-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-charcoal">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-charcoal">Order Summary</h2>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sand-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sand-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-cherry-500">
                      Add {formatPrice(100 - subtotal)} more for free shipping!
                    </p>
                  )}
                </div>

                {/* Discount Code */}
                <div className="mt-6 pt-6 border-t border-sand-200">
                  <label className="text-sm font-medium text-charcoal">Discount Code</label>
                  <div className="mt-2 flex gap-2">
                    <Input placeholder="Enter code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-sand-200">
                  <div className="flex justify-between text-lg font-semibold text-charcoal">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <Button asChild size="xl" className="w-full mt-6">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>

                <Link
                  to="/shop"
                  className="block mt-4 text-center text-sm link-cherry"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
