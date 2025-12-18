import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminOrderDetail() {
  const { id } = useParams()
  return (
    <>
      <Helmet><title>Order {id} | Admin | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <Link to="/admin/orders" className="inline-flex items-center text-sand-600 hover:text-cherry-500 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />Back to Orders
          </Link>
          <div className="flex justify-between items-center">
            <h1 className="heading-2 text-charcoal">Order {id}</h1>
            <span className="px-3 py-1 bg-bay-100 text-bay-700 rounded text-sm font-medium">Processing</span>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Order Items</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 pb-4 border-b">
                    <div className="w-20 h-24 bg-sand-100 rounded"></div>
                    <div className="flex-1">
                      <p className="font-medium">Coral Sunset Triangle Top</p>
                      <p className="text-sm text-sand-600">Coral / M</p>
                      <p className="text-sm text-sand-600">Qty: 1</p>
                    </div>
                    <p className="font-medium">$65.00</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Update Status</h2>
                <div className="flex gap-4">
                  <select className="flex-1 rounded-md border border-input px-3 py-2 text-sm">
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                  <Button>Update</Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Customer</h2>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-sand-600">sarah@email.com</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                <p className="text-sm text-sand-700">
                  123 Beach Road<br />
                  Gold Coast, QLD 4217<br />
                  Australia
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-sand-600">Subtotal</span><span>$65.00</span></div>
                  <div className="flex justify-between"><span className="text-sand-600">Shipping</span><span>$9.95</span></div>
                  <div className="flex justify-between font-semibold pt-2 border-t"><span>Total</span><span>$74.95</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
