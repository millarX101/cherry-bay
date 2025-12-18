import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronRight, Heart, Minus, Plus, Truck, RefreshCw, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/product/ProductCard'
import { useCart } from '@/context/CartContext'
import { getProductBySlug, getRelatedProducts, getMatchingProducts } from '@/data/products'
import { cn, formatPrice, getDiscountPercentage } from '@/lib/utils'

export default function Product() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const product = getProductBySlug(slug || '')

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) {
    return (
      <div className="container-wide py-20 text-center">
        <h1 className="heading-2 text-charcoal">Product not found</h1>
        <p className="mt-4 text-sand-600">The product you're looking for doesn't exist.</p>
        <Button asChild className="mt-8">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  const hasDiscount = product.comparePrice && product.comparePrice > product.price
  const discountPercentage = hasDiscount
    ? getDiscountPercentage(product.comparePrice!, product.price)
    : 0

  const relatedProducts = getRelatedProducts(product)
  const matchingProducts = getMatchingProducts(product)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    addItem(product, selectedSize, selectedColor, quantity)
  }

  return (
    <>
      <Helmet>
        <title>{product.metaTitle || `${product.name} | Cherry Bay`}</title>
        <meta name="description" content={product.metaDescription || product.shortDescription} />
      </Helmet>

      <div className="bg-cream">
        {/* Breadcrumbs */}
        <nav className="container-wide py-4">
          <ol className="flex items-center gap-2 text-sm text-sand-600">
            <li><Link to="/" className="hover:text-cherry-500">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/shop" className="hover:text-cherry-500">Shop</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="container-wide pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-sand-100">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        'w-20 h-24 rounded-lg overflow-hidden shrink-0 border-2 transition-colors',
                        currentImageIndex === index ? 'border-cherry-500' : 'border-transparent'
                      )}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-center gap-2 mb-2">
                {product.newArrival && <Badge variant="new">New Arrival</Badge>}
                {product.bestseller && <Badge variant="bestseller">Bestseller</Badge>}
                {product.onSale && <Badge variant="sale">{discountPercentage}% OFF</Badge>}
              </div>

              <h1 className="text-3xl font-display font-semibold text-charcoal">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-2xl font-semibold text-charcoal">
                  {formatPrice(product.price)}
                </span>
                {hasDiscount && (
                  <span className="text-lg text-sand-500 line-through">
                    {formatPrice(product.comparePrice!)}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sand-700">{product.description}</p>

              {/* Color Selection */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-charcoal mb-3">
                  Color: <span className="font-normal">{selectedColor}</span>
                </h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        'w-10 h-10 rounded-full border-2 transition-all',
                        selectedColor === color
                          ? 'border-charcoal scale-110'
                          : 'border-sand-300 hover:scale-105'
                      )}
                      style={{ backgroundColor: product.colorHex[color] }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-charcoal">Size</h3>
                  <Link to="/size-guide" className="text-sm link-cherry">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const inStock = (product.availableSizes[size] || 0) > 0
                    return (
                      <button
                        key={size}
                        onClick={() => inStock && setSelectedSize(size)}
                        disabled={!inStock}
                        className={cn(
                          'px-4 py-2 text-sm border rounded-md transition-colors',
                          selectedSize === size
                            ? 'bg-cherry-500 text-white border-cherry-500'
                            : inStock
                            ? 'border-sand-300 hover:border-cherry-500'
                            : 'border-sand-200 text-sand-400 cursor-not-allowed line-through'
                        )}
                      >
                        {size}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-charcoal mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-sand-300 rounded-md hover:bg-sand-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-sand-300 rounded-md hover:bg-sand-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mt-8 flex gap-3">
                <Button
                  size="xl"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Add to Cart' : 'Sold Out'}
                </Button>
                <Button variant="outline" size="xl">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-sand-200">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-cherry-500" />
                  <p className="mt-2 text-xs text-sand-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 mx-auto text-cherry-500" />
                  <p className="mt-2 text-xs text-sand-600">Easy Returns</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-cherry-500" />
                  <p className="mt-2 text-xs text-sand-600">Secure Checkout</p>
                </div>
              </div>

              {/* Product Details Accordion */}
              <div className="mt-8 space-y-4 pt-8 border-t border-sand-200">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-2 font-semibold">
                    Materials & Care
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="py-2 text-sm text-sand-700">
                    <p><strong>Material:</strong> {product.material}</p>
                    <p className="mt-2"><strong>Care:</strong> {product.careInstructions}</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Matching Products */}
        {matchingProducts.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-wide">
              <h2 className="heading-3 text-charcoal mb-8">Complete the Look</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {matchingProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section-padding bg-sand-50">
            <div className="container-wide">
              <h2 className="heading-3 text-charcoal mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
