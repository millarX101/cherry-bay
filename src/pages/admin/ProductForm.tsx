import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AdminProductForm() {
  const { id } = useParams()
  const isEditing = Boolean(id)

  return (
    <>
      <Helmet><title>{isEditing ? 'Edit' : 'Add'} Product | Admin | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <Link to="/admin/products" className="inline-flex items-center text-sand-600 hover:text-cherry-500 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />Back to Products
          </Link>
          <h1 className="heading-2 text-charcoal">{isEditing ? 'Edit' : 'Add'} Product</h1>

          <form className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Product Name</label>
                    <Input className="mt-1" placeholder="e.g. Coral Sunset Triangle Top" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <textarea className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm min-h-[120px]" placeholder="Product description..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Category</label>
                      <select className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm">
                        <option>Bikini Top</option>
                        <option>Bikini Bottom</option>
                        <option>One Piece</option>
                        <option>Cover Up</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Style</label>
                      <select className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm">
                        <option>Triangle</option>
                        <option>Bandeau</option>
                        <option>Halter</option>
                        <option>High-Waisted</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Pricing</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Price ($)</label>
                    <Input className="mt-1" type="number" placeholder="65.00" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Compare Price ($)</label>
                    <Input className="mt-1" type="number" placeholder="Optional" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Images</h2>
                <div className="border-2 border-dashed border-sand-300 rounded-lg p-8 text-center">
                  <p className="text-sand-600">Drag and drop images here, or click to upload</p>
                  <Button variant="outline" className="mt-4">Upload Images</Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Status</h2>
                <select className="w-full rounded-md border border-input px-3 py-2 text-sm">
                  <option>Active</option>
                  <option>Draft</option>
                </select>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Inventory</h2>
                <div className="space-y-4">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <div key={size} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{size}</span>
                      <Input type="number" className="w-20" placeholder="0" />
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" size="lg">Save Product</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
