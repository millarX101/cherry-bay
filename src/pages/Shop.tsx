import { useState, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SlidersHorizontal, Grid3X3, LayoutGrid, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ProductCard } from '@/components/product/ProductCard'
import { demoProducts } from '@/data/products'
import { cn } from '@/lib/utils'

const categories = [
  { slug: 'bikini-tops', name: 'Bikini Tops' },
  { slug: 'bikini-bottoms', name: 'Bikini Bottoms' },
  { slug: 'one-pieces', name: 'One Pieces' },
  { slug: 'cover-ups', name: 'Cover Ups' },
]

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL']
const styles = ['triangle', 'bandeau', 'halter', 'high-waisted', 'cheeky', 'mid-rise', 'plunge']

export default function Shop() {
  const { category } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filter = searchParams.get('filter')
  const sort = searchParams.get('sort') || 'newest'
  const selectedSizes = searchParams.getAll('size')
  const selectedStyles = searchParams.getAll('style')

  const filteredProducts = useMemo(() => {
    let products = [...demoProducts]

    // Category filter
    if (category) {
      const categoryMap: Record<string, string> = {
        'bikini-tops': 'bikini-top',
        'bikini-bottoms': 'bikini-bottom',
        'one-pieces': 'one-piece',
        'cover-ups': 'cover-up',
      }
      products = products.filter((p) => p.category === categoryMap[category])
    }

    // Filter by tag
    if (filter === 'new') {
      products = products.filter((p) => p.newArrival)
    } else if (filter === 'sale') {
      products = products.filter((p) => p.onSale)
    } else if (filter === 'featured') {
      products = products.filter((p) => p.featured)
    } else if (filter === 'bestseller') {
      products = products.filter((p) => p.bestseller)
    }

    // Size filter
    if (selectedSizes.length > 0) {
      products = products.filter((p) =>
        selectedSizes.some((size) => p.sizes.includes(size))
      )
    }

    // Style filter
    if (selectedStyles.length > 0) {
      products = products.filter((p) =>
        selectedStyles.includes(p.style || '')
      )
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        products.sort((a, b) => b.price - a.price)
        break
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
      default:
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return products
  }, [category, filter, sort, selectedSizes, selectedStyles])

  const toggleFilter = (key: string, value: string) => {
    const current = searchParams.getAll(key)
    if (current.includes(value)) {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete(key)
      current.filter((v) => v !== value).forEach((v) => newParams.append(key, v))
      setSearchParams(newParams)
    } else {
      const newParams = new URLSearchParams(searchParams)
      newParams.append(key, value)
      setSearchParams(newParams)
    }
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const pageTitle = category
    ? categories.find((c) => c.slug === category)?.name || 'Shop'
    : filter
    ? filter.charAt(0).toUpperCase() + filter.slice(1)
    : 'Shop All'

  const activeFilterCount = selectedSizes.length + selectedStyles.length

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Cherry Bay</title>
        <meta name="description" content={`Shop ${pageTitle.toLowerCase()} at Cherry Bay. Swimwear designed for confidence.`} />
      </Helmet>

      <div className="bg-cream min-h-screen">
        {/* Page Header */}
        <div className="bg-sand-100 py-8 md:py-12">
          <div className="container-wide">
            <h1 className="heading-2 text-charcoal">{pageTitle}</h1>
            <p className="mt-2 text-sand-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
        </div>

        <div className="container-wide py-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-8">
            {/* Filters Button (Mobile) */}
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-2 h-5 w-5 rounded-full bg-cherry-500 text-white text-xs flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <FilterContent
                  sizes={sizes}
                  styles={styles}
                  selectedSizes={selectedSizes}
                  selectedStyles={selectedStyles}
                  toggleFilter={toggleFilter}
                  clearFilters={clearFilters}
                />
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-sand-600 hidden sm:inline">
                Sort by:
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => {
                  const newParams = new URLSearchParams(searchParams)
                  newParams.set('sort', e.target.value)
                  setSearchParams(newParams)
                }}
                className="text-sm border border-sand-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-cherry-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid Toggle (Desktop) */}
            <div className="hidden md:flex items-center gap-1 border border-sand-300 rounded-md p-1">
              <button
                onClick={() => setGridCols(2)}
                className={cn(
                  'p-1.5 rounded transition-colors',
                  gridCols === 2 ? 'bg-cherry-500 text-white' : 'hover:bg-sand-100'
                )}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={cn(
                  'p-1.5 rounded transition-colors',
                  gridCols === 3 ? 'bg-cherry-500 text-white' : 'hover:bg-sand-100'
                )}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={cn(
                  'p-1.5 rounded transition-colors',
                  gridCols === 4 ? 'bg-cherry-500 text-white' : 'hover:bg-sand-100'
                )}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <FilterContent
                sizes={sizes}
                styles={styles}
                selectedSizes={selectedSizes}
                selectedStyles={selectedStyles}
                toggleFilter={toggleFilter}
                clearFilters={clearFilters}
              />
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-sand-600 text-lg">No products found</p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </div>
              ) : (
                <div
                  className={cn(
                    'grid gap-4 md:gap-6',
                    gridCols === 2 && 'grid-cols-2',
                    gridCols === 3 && 'grid-cols-2 lg:grid-cols-3',
                    gridCols === 4 && 'grid-cols-2 lg:grid-cols-4'
                  )}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface FilterContentProps {
  sizes: string[]
  styles: string[]
  selectedSizes: string[]
  selectedStyles: string[]
  toggleFilter: (key: string, value: string) => void
  clearFilters: () => void
}

function FilterContent({
  sizes,
  styles,
  selectedSizes,
  selectedStyles,
  toggleFilter,
  clearFilters,
}: FilterContentProps) {
  const hasFilters = selectedSizes.length > 0 || selectedStyles.length > 0

  return (
    <div className="space-y-6">
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-cherry-500 hover:text-cherry-600 flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          Clear all filters
        </button>
      )}

      {/* Size Filter */}
      <div>
        <h3 className="font-semibold text-charcoal mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleFilter('size', size)}
              className={cn(
                'px-3 py-1.5 text-sm border rounded-md transition-colors',
                selectedSizes.includes(size)
                  ? 'bg-cherry-500 text-white border-cherry-500'
                  : 'border-sand-300 hover:border-cherry-500'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Style Filter */}
      <div>
        <h3 className="font-semibold text-charcoal mb-3">Style</h3>
        <div className="space-y-2">
          {styles.map((style) => (
            <label key={style} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedStyles.includes(style)}
                onChange={() => toggleFilter('style', style)}
                className="rounded border-sand-300 text-cherry-500 focus:ring-cherry-500"
              />
              <span className="text-sm capitalize">{style.replace('-', ' ')}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
