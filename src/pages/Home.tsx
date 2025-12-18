import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { getStorageUrl, supabase } from '@/lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus('loading')

    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email, source: 'coming_soon' }])

      if (error) {
        if (error.code === '23505') {
          setStatus('success')
          setMessage("You're already on the list!")
        } else {
          throw error
        }
      } else {
        // Send notification to ben@millarX.com.au
        fetch('/api/notify-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }).catch(() => {}) // Fire and forget - don't block on notification

        setStatus('success')
        setMessage("You're in! We'll be in touch soon.")
        setEmail('')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Cherry Bay | Coming Soon</title>
        <meta
          name="description"
          content="Cherry Bay swimwear is coming soon. Sign up to be the first to know when we launch."
        />
      </Helmet>

      {/* Full-screen Coming Soon Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Full-width hero image */}
        <img
          src={getStorageUrl('Hero 1.jpg')}
          alt="Cherry Bay swimwear"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Dark overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        {/* Content overlay */}
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 py-20">
          <span className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium">
            Cherry Bay
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold max-w-4xl leading-tight">
            Shhh... We're Coming Soon
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
            Swimwear designed for confidence. Be the first to know when we launch.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="bg-white text-charcoal hover:bg-white/90 border-0"
              >
                {status === 'loading' ? 'Signing up...' : 'Notify Me'}
              </Button>
            </div>

            {/* Status Message */}
            {status !== 'idle' && status !== 'loading' && (
              <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                {message}
              </p>
            )}
          </form>

          {/* Brand Story */}
          <div className="mt-16 max-w-2xl">
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Finding swimwear that feels right shouldn't be hard. Cherry Bay is changing that —
              swimwear made for movement, confidence, and fun. Australian designed, made for sun-seekers.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Hero Image Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={getStorageUrl('Hero 3.png')}
          alt="Cherry Bay collection"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative h-full flex items-end justify-center pb-12">
          <p className="text-white text-lg md:text-xl font-display tracking-wide">
            Stay tuned for something special
          </p>
        </div>
      </section>
    </>
  )
}
