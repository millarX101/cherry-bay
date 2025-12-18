import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Wishlist() {
  return (
    <>
      <Helmet><title>Wishlist | Cherry Bay</title></Helmet>
      <div className="container-wide py-20 text-center">
        <Heart className="h-16 w-16 mx-auto text-sand-300" />
        <h1 className="mt-6 heading-2 text-charcoal">Your Wishlist</h1>
        <p className="mt-4 text-sand-600">Sign in to save your favorite items.</p>
        <Button asChild className="mt-8"><Link to="/account">Sign In</Link></Button>
      </div>
    </>
  )
}
