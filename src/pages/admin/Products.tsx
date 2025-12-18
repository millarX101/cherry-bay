import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Plus, Search, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { demoProducts } from '@/data/products'
import { formatPrice } from '@/lib/utils'

export default function AdminProducts() {
  return (
    <>
      <Helmet><title>Products | Admin | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <div className="flex justify-between items-center">
            <h1 className="heading-2 text-charcoal">Products</h1>
            <Button asChild><Link to="/admin/products/new"><Plus className="h-4 w-4 mr-2" />Add Product</Link></Button>
          </div>

          <div className="mt-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sand-400" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-sand-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-sand-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-sand-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {demoProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-sand-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={product.images[0]} className="w-12 h-16 rounded object-cover" />
                        <span className="font-medium text-charcoal">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sand-600 capitalize">{product.category.replace('-', ' ')}</td>
                    <td className="px-6 py-4 text-charcoal">{formatPrice(product.price)}</td>
                    <td className="px-6 py-4 text-charcoal">{product.totalStock}</td>
                    <td className="px-6 py-4">
                      {product.inStock ? (
                        <Badge variant="secondary" className="bg-bay-100 text-bay-700">Active</Badge>
                      ) : (
                        <Badge variant="outOfStock">Out of Stock</Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/admin/products/${product.id}/edit`} className="p-2 hover:bg-sand-100 rounded inline-flex">
                        <Edit className="h-4 w-4 text-sand-600" />
                      </Link>
                      <button className="p-2 hover:bg-sand-100 rounded inline-flex ml-1">
                        <Trash2 className="h-4 w-4 text-cherry-500" />
                      </button>
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
