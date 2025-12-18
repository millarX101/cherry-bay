import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Search, Eye } from 'lucide-react'
import { Input } from '@/components/ui/input'

const orders = [
  { id: 'CB-2025-0001', email: 'sarah@email.com', date: '2025-01-15', total: 185, status: 'delivered' },
  { id: 'CB-2025-0002', email: 'emma@email.com', date: '2025-01-14', total: 120, status: 'shipped' },
  { id: 'CB-2025-0003', email: 'lily@email.com', date: '2025-01-14', total: 245, status: 'processing' },
  { id: 'CB-2025-0004', email: 'mia@email.com', date: '2025-01-13', total: 65, status: 'pending' },
]

const statusColors: Record<string, string> = {
  pending: 'bg-sand-100 text-sand-700',
  processing: 'bg-bay-100 text-bay-700',
  shipped: 'bg-cherry-100 text-cherry-700',
  delivered: 'bg-green-100 text-green-700',
}

export default function AdminOrders() {
  return (
    <>
      <Helmet><title>Orders | Admin | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <h1 className="heading-2 text-charcoal">Orders</h1>

          <div className="mt-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sand-400" />
              <Input placeholder="Search orders..." className="pl-10" />
            </div>
            <select className="rounded-md border border-input px-3 py-2 text-sm">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </div>

          <div className="mt-6 bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-sand-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-sand-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-sand-50">
                    <td className="px-6 py-4 font-medium text-charcoal">{order.id}</td>
                    <td className="px-6 py-4 text-sand-600">{order.email}</td>
                    <td className="px-6 py-4 text-sand-600">{order.date}</td>
                    <td className="px-6 py-4 text-charcoal">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded capitalize ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/admin/orders/${order.id}`} className="p-2 hover:bg-sand-100 rounded inline-flex">
                        <Eye className="h-4 w-4 text-sand-600" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
