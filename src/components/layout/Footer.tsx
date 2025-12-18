import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const footerNavigation = {
  shop: [
    { name: 'All Swimwear', href: '/shop' },
    { name: 'Bikini Tops', href: '/shop/bikini-tops' },
    { name: 'Bikini Bottoms', href: '/shop/bikini-bottoms' },
    { name: 'One Pieces', href: '/shop/one-pieces' },
    { name: 'Cover Ups', href: '/shop/cover-ups' },
    { name: 'Sale', href: '/shop?filter=sale' },
  ],
  help: [
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ],
  company: [
    { name: 'About Cherry Bay', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Sustainability', href: '/about#sustainability' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/cherrybay' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/cherrybay' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@cherrybay.com' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-charcoal text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Newsletter Section */}
      <div className="bg-cherry-500 py-12">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-semibold">
                Join the Cherry Bay Club
              </h3>
              <p className="mt-1 text-cherry-100">
                Get 15% off your first order + exclusive access to new arrivals & sales.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto md:min-w-[400px]">
              {subscribed ? (
                <p className="text-lg font-medium">
                  Thanks for subscribing! Check your inbox for your discount code.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white text-charcoal border-0 focus-visible:ring-2 focus-visible:ring-white"
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-cherry-500 shrink-0"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-display font-bold text-cherry-400">
                Cherry Bay
              </span>
            </Link>
            <p className="mt-4 text-sm text-sand-300 max-w-xs">
              Swimwear designed for confidence. Made with love for sun-seekers everywhere.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-400 hover:text-cherry-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-300">
              Shop
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.shop.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sand-400 hover:text-cherry-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-300">
              Help
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.help.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sand-400 hover:text-cherry-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sand-400 hover:text-cherry-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-sand-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-sand-500">
              &copy; {new Date().getFullYear()} Cherry Bay. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-sand-500 hover:text-cherry-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
