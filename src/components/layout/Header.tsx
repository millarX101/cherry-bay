import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, Heart, ShoppingBag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'New Arrivals', href: '/shop?filter=new' },
  { name: 'Bikini Tops', href: '/shop/bikini-tops' },
  { name: 'Bikini Bottoms', href: '/shop/bikini-bottoms' },
  { name: 'One Pieces', href: '/shop/one-pieces' },
  { name: 'Sale', href: '/shop?filter=sale', highlight: true },
]

const mobileNavigation = [
  { name: 'Shop All', href: '/shop' },
  { name: 'New Arrivals', href: '/shop?filter=new' },
  { name: 'Bikini Tops', href: '/shop/bikini-tops' },
  { name: 'Bikini Bottoms', href: '/shop/bikini-bottoms' },
  { name: 'One Pieces', href: '/shop/one-pieces' },
  { name: 'Cover Ups', href: '/shop/cover-ups' },
  { name: 'Sale', href: '/shop?filter=sale', highlight: true },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const location = useLocation()
  const { itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-sand-200">
      <nav className="container-wide" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="-ml-2">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Link to="/" className="text-2xl font-display font-bold text-cherry-500">
                      Cherry Bay
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col space-y-1">
                  {mobileNavigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          'px-3 py-3 text-base font-medium rounded-md transition-colors',
                          item.highlight
                            ? 'text-cherry-500 hover:bg-cherry-50'
                            : 'text-charcoal hover:bg-sand-100',
                          location.pathname === item.href && 'bg-sand-100'
                        )}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 pt-8 border-t border-sand-200">
                  <SheetClose asChild>
                    <Link
                      to="/account"
                      className="flex items-center px-3 py-3 text-base font-medium text-charcoal hover:bg-sand-100 rounded-md"
                    >
                      <User className="h-5 w-5 mr-3" />
                      Account
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/wishlist"
                      className="flex items-center px-3 py-3 text-base font-medium text-charcoal hover:bg-sand-100 rounded-md"
                    >
                      <Heart className="h-5 w-5 mr-3" />
                      Wishlist
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl md:text-3xl font-display font-bold text-cherry-500 tracking-tight">
                Cherry Bay
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors relative py-2',
                  item.highlight
                    ? 'text-cherry-500 hover:text-cherry-600'
                    : 'text-charcoal hover:text-cherry-500',
                  location.pathname === item.href &&
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cherry-500'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex flex-1 items-center justify-end gap-x-2 sm:gap-x-4">
            {/* Search */}
            <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Search</span>
                  <Search className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-auto">
                <div className="container-wide py-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search for bikinis, one pieces, cover ups..."
                      className="w-full h-12 pl-12 pr-4 text-lg border-b-2 border-sand-300 bg-transparent focus:border-cherry-500 focus:outline-none transition-colors"
                      autoFocus
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-sm text-muted-foreground">Popular:</span>
                    <Link to="/shop?search=triangle" className="text-sm link-cherry" onClick={() => setSearchOpen(false)}>
                      Triangle tops
                    </Link>
                    <Link to="/shop?search=high-waisted" className="text-sm link-cherry" onClick={() => setSearchOpen(false)}>
                      High-waisted
                    </Link>
                    <Link to="/shop?search=one-piece" className="text-sm link-cherry" onClick={() => setSearchOpen(false)}>
                      One pieces
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Account (desktop) */}
            <Link to="/account" className="hidden sm:block">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Account</span>
                <User className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>

            {/* Wishlist (desktop) */}
            <Link to="/wishlist" className="hidden sm:block">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Wishlist</span>
                <Heart className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Shopping cart</span>
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-cherry-500 text-white text-xs font-bold flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
