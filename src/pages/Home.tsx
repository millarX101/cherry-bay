import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Truck, RefreshCw, Shield, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/ProductCard'
import { demoProducts } from '@/data/products'

export default function Home() {
  const featuredProducts = demoProducts.filter((p) => p.featured).slice(0, 4)
  const newArrivals = demoProducts.filter((p) => p.newArrival).slice(0, 4)
  const bestsellers = demoProducts.filter((p) => p.bestseller).slice(0, 4)

  return (
    <>
      <Helmet>
        <title>Cherry Bay | Swimwear Designed for Confidence</title>
        <meta
          name="description"
          content="Discover Cherry Bay's collection of stunning bikinis, one-pieces, and swimwear. Designed for confidence, made for sun-seekers."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sand-100 via-cherry-50 to-bay-50 overflow-hidden">
        <div className="container-wide py-20 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="heading-1 text-charcoal">
                Swimwear Designed for{' '}
                <span className="text-cherry-500">Confidence</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-sand-700 max-w-xl mx-auto lg:mx-0">
                Dive into summer with Cherry Bay's stunning collection of bikinis and
                swimwear. Made for sun-seekers who love to stand out.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="xl">
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/shop?filter=new">New Arrivals</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-sand-200">
                <img
                  src="https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&h=1000&fit=crop"
                  alt="Woman in bikini on beach"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cherry-200 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-bay-200 rounded-full blur-2xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-y border-sand-200">
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center justify-center gap-3 text-center">
              <Truck className="h-8 w-8 text-cherry-500 shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-charcoal">Free Shipping</p>
                <p className="text-sm text-sand-600">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <RefreshCw className="h-8 w-8 text-cherry-500 shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-charcoal">Easy Returns</p>
                <p className="text-sm text-sand-600">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <Shield className="h-8 w-8 text-cherry-500 shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-charcoal">Secure Checkout</p>
                <p className="text-sm text-sand-600">100% protected</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <Heart className="h-8 w-8 text-cherry-500 shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-charcoal">Made with Love</p>
                <p className="text-sm text-sand-600">Australian designed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-charcoal">Shop by Category</h2>
            <p className="mt-4 text-sand-600 max-w-2xl mx-auto">
              Find your perfect match from our curated collections
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Bikini Tops',
                href: '/shop/bikini-tops',
                image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=600&h=800&fit=crop',
              },
              {
                name: 'Bikini Bottoms',
                href: '/shop/bikini-bottoms',
                image: 'https://images.unsplash.com/photo-1559097086-3c2abc8f4319?w=600&h=800&fit=crop',
              },
              {
                name: 'One Pieces',
                href: '/shop/one-pieces',
                image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=600&h=800&fit=crop',
              },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-white/80 flex items-center">
                    Shop now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-2 text-charcoal">Featured Styles</h2>
            <Link to="/shop?filter=featured" className="link-cherry flex items-center">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding bg-sand-50">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-2 text-charcoal">New Arrivals</h2>
            <Link to="/shop?filter=new" className="link-cherry flex items-center">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-cherry-500 text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                Meet the Founder
              </h2>
              <p className="mt-6 text-cherry-100 text-lg leading-relaxed">
                Cherry Bay was born from a love of summer, confidence, and self-expression.
                As a young designer with a passion for fashion, I wanted to create swimwear
                that makes every woman feel beautiful and bold.
              </p>
              <p className="mt-4 text-cherry-100 text-lg leading-relaxed">
                Every piece is designed with love in Australia, using sustainable materials
                and ethical practices. Because looking good should feel good too.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-8 border-white text-white hover:bg-white hover:text-cherry-500"
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop"
                  alt="Cherry Bay founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-2 text-charcoal">Bestsellers</h2>
            <Link to="/shop?filter=bestseller" className="link-cherry flex items-center">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section-padding bg-sand-50">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="heading-2 text-charcoal">#CherryBayGirl</h2>
            <p className="mt-4 text-sand-600">
              Tag us in your photos for a chance to be featured
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <a
                key={i}
                href="https://instagram.com/cherrybay"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1559085715 + i * 1000}-698b6a103642?w=400&h=400&fit=crop`}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <a
                href="https://instagram.com/cherrybay"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow @cherrybay
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-charcoal text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-display font-semibold">
            Get 15% Off Your First Order
          </h2>
          <p className="mt-4 text-sand-400 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling tips.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-sand-800 border border-sand-700 text-white placeholder:text-sand-500 focus:outline-none focus:ring-2 focus:ring-cherry-500"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  )
}
