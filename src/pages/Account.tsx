import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Account() {
  return (
    <>
      <Helmet><title>Account | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <div className="max-w-md mx-auto">
            <h1 className="heading-2 text-charcoal text-center">Sign In</h1>
            <p className="mt-4 text-sand-600 text-center">Sign in to view your orders and manage your account.</p>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-sm font-medium text-charcoal">Email</label>
                <Input className="mt-1" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal">Password</label>
                <Input className="mt-1" type="password" placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
            <p className="mt-6 text-center text-sand-600">
              Don't have an account?{' '}
              <button className="link-cherry">Create one</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
