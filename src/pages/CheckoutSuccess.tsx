import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CheckoutSuccess() {
  return (
    <>
      <Helmet><title>Order Confirmed | Cherry Bay</title></Helmet>
      <div className="container-wide py-20 text-center">
        <CheckCircle className="h-20 w-20 mx-auto text-bay-500" />
        <h1 className="mt-6 heading-2 text-charcoal">Thank You!</h1>
        <p className="mt-4 text-sand-600 max-w-md mx-auto">
          Your order has been confirmed. You'll receive an email with your order details shortly.
        </p>
        <Button asChild className="mt-8"><Link to="/shop">Continue Shopping</Link></Button>
      </div>
    </>
  )
}
