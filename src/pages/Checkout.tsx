import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function Checkout() {
  const { items, subtotal } = useCart()
  const shipping = subtotal >= 100 ? 0 : 12.95
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="container-wide py-20 text-center">
        <h1 className="heading-2">Your cart is empty</h1>
        <Button asChild className="mt-8"><Link to="/shop">Continue Shopping</Link></Button>
      </div>
    )
  }

  return (
    <>
      <Helmet><title>Checkout | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-8 md:py-12">
          <h1 className="heading-2 text-charcoal">Checkout</h1>
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <Input placeholder="Email address" type="email" />
              </div>
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                  <Input placeholder="Address" className="col-span-2" />
                  <Input placeholder="City" />
                  <Input placeholder="State" />
                  <Input placeholder="Postcode" />
                  <Input placeholder="Phone" />
                </div>
              </div>
              <Button size="xl" className="w-full">Continue to Payment</Button>
            </div>
            <div className="bg-white rounded-xl p-6 h-fit sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.product.images[0]} className="w-16 h-20 rounded object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.product.name}</p>
                      <p className="text-xs text-sand-600">{item.color} / {item.size} x {item.quantity}</p>
                    </div>
                    <p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t space-y-2">
                <div className="flex justify-between text-sand-600"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between text-sand-600"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
                <div className="flex justify-between text-lg font-semibold pt-4 border-t"><span>Total</span><span>{formatPrice(total)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
