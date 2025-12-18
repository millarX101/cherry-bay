import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ImageOff } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn, formatPrice, getDiscountPercentage } from '@/lib/utils'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const hasDiscount = product.comparePrice && product.comparePrice > product.price
  const discountPercentage = hasDiscount
    ? getDiscountPercentage(product.comparePrice!, product.price)
    : 0

  return (
    <div className={cn('group relative', className)}>
      {/* Image Container */}
      <Link
        to={`/product/${product.slug}`}
        className="block aspect-[3/4] overflow-hidden rounded-lg bg-gradient-to-br from-sand-100 to-sand-200"
      >
        {imageError ? (
          <div className="h-full w-full flex flex-col items-center justify-center text-sand-400">
            <ImageOff className="h-12 w-12 mb-2" />
            <span className="text-sm">Image coming soon</span>
          </div>
        ) : (
          <>
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
            {/* Second image on hover (if available) */}
            {product.images[1] && (
              <img
                src={product.images[1]}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                onError={() => {}}
              />
            )}
          </>
        )}
      </Link>

      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-1">
        {product.onSale && hasDiscount && (
          <Badge variant="sale">{discountPercentage}% OFF</Badge>
        )}
        {product.newArrival && <Badge variant="new">New</Badge>}
        {product.bestseller && !product.newArrival && (
          <Badge variant="bestseller">Bestseller</Badge>
        )}
        {!product.inStock && <Badge variant="outOfStock">Sold Out</Badge>}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
        onClick={(e) => {
          e.preventDefault()
          // TODO: Add to wishlist
        }}
      >
        <Heart className="h-4 w-4" />
        <span className="sr-only">Add to wishlist</span>
      </Button>

      {/* Product Info */}
      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-charcoal group-hover:text-cherry-500 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Color Swatches */}
        {product.colors.length > 1 && (
          <div className="mt-2 flex gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color}
                className="h-4 w-4 rounded-full border border-sand-300"
                style={{ backgroundColor: product.colorHex[color] }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-sand-500 ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-charcoal">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-sand-500 line-through">
              {formatPrice(product.comparePrice!)}
            </span>
          )}
        </div>
      </div>

      {/* Quick Add - Shows on hover */}
      <div className="absolute bottom-[120px] left-0 right-0 px-3 opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
        <Button
          className="w-full"
          size="sm"
          disabled={!product.inStock}
          onClick={(e) => {
            e.preventDefault()
            // TODO: Open quick add modal or add to cart
          }}
        >
          {product.inStock ? 'Quick Add' : 'Sold Out'}
        </Button>
      </div>
    </div>
  )
}
