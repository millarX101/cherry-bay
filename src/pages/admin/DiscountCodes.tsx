import { Helmet } from 'react-helmet-async'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const discounts = [
  { code: 'CHERRYBAY15', type: '15%', usage: '45/100', status: 'active' },
  { code: 'SUMMER20', type: '20%', usage: '12/50', status: 'active' },
  { code: 'FREESHIP', type: 'Free Shipping', usage: '89/unlimited', status: 'active' },
  { code: 'WELCOME10', type: '10%', usage: '156/unlimited', status: 'expired' },
]

export default function AdminDiscountCodes() {
  return (
    <>
      <Helmet><title>Discount Codes | Admin | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <div className="flex justify-between items-center">
            <h1 className="heading-2 text-charcoal">Discount Codes</h1>
            <Button><Plus className="h-4 w-4 mr-2" />Create Code</Button>
          </div>
          <div className="mt-6 bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-sand-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Code</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Discount</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-sand-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {discounts.map((discount) => (
                  <tr key={discount.code} className="hover:bg-sand-50">
                    <td className="px-6 py-4 font-mono font-medium text-charcoal">{discount.code}</td>
                    <td className="px-6 py-4 text-charcoal">{discount.type}</td>
                    <td className="px-6 py-4 text-sand-600">{discount.usage}</td>
                    <td className="px-6 py-4">
                      <Badge variant={discount.status === 'active' ? 'secondary' : 'outOfStock'}>
                        {discount.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-sand-100 rounded inline-flex"><Edit className="h-4 w-4 text-sand-600" /></button>
                      <button className="p-2 hover:bg-sand-100 rounded inline-flex ml-1"><Trash2 className="h-4 w-4 text-cherry-500" /></button>
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
