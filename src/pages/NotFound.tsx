import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <Helmet><title>Page Not Found | Cherry Bay</title></Helmet>
      <div className="container-wide py-20 text-center">
        <h1 className="text-8xl font-display font-bold text-cherry-200">404</h1>
        <h2 className="mt-4 heading-2 text-charcoal">Page Not Found</h2>
        <p className="mt-4 text-sand-600">The page you're looking for doesn't exist.</p>
        <Button asChild className="mt-8"><Link to="/">Go Home</Link></Button>
      </div>
    </>
  )
}
