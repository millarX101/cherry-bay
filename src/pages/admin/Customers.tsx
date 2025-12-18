import { Helmet } from 'react-helmet-async'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const customers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', orders: 5, spent: 485 },
  { id: 2, name: 'Emma Wilson', email: 'emma@email.com', orders: 3, spent: 320 },
  { id: 3, name: 'Lily Chen', email: 'lily@email.com', orders: 2, spent: 245 },
  { id: 4, name: 'Mia Brown', email: 'mia@email.com', orders: 1, spent: 65 },
]

export default function AdminCustomers() {
  return (
    <>
      <Helmet><title>Customers | Admin | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <h1 className="heading-2 text-charcoal">Customers</h1>
          <div className="mt-6 relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sand-400" />
            <Input placeholder="Search customers..." className="pl-10" />
          </div>
          <div className="mt-6 bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-sand-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Total Spent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-sand-50">
                    <td className="px-6 py-4 font-medium text-charcoal">{customer.name}</td>
                    <td className="px-6 py-4 text-sand-600">{customer.email}</td>
                    <td className="px-6 py-4 text-charcoal">{customer.orders}</td>
                    <td className="px-6 py-4 text-charcoal">${customer.spent.toFixed(2)}</td>
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
