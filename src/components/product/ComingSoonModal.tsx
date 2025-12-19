import { useState } from 'react'
import { X, Sparkles, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import type { Product } from '@/types'

interface ComingSoonModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ComingSoonModal({ product, isOpen, onClose }: ComingSoonModalProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email, source: `product_${product.slug}` }])

      if (error) {
        if (error.code === '23505') {
          setStatus('success')
          setMessage("You're already on the list!")
        } else {
          throw error
        }
      } else {
        // Send notification
        fetch('/api/notify-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }).catch(() => {})

        setStatus('success')
        setMessage("You're in! We'll notify you first.")
        setEmail('')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <X className="h-5 w-5 text-charcoal" />
        </button>

        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-cherry-100 via-sand-50 to-bay-100 px-6 pt-10 pb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4">
            <Sparkles className="h-8 w-8 text-cherry-500" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Coming Soon
          </h2>
          <p className="mt-2 text-sand-600">
            {product.name}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="text-center mb-6">
            <p className="text-charcoal leading-relaxed">
              This style is almost here! Be the first to know when it drops and get
              <span className="font-semibold text-cherry-500"> exclusive early access</span>.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-sand-200 bg-sand-50 text-charcoal placeholder:text-sand-400 focus:outline-none focus:ring-2 focus:ring-cherry-300 focus:border-cherry-300 transition-all"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === 'loading'}
              className="w-full bg-cherry-500 hover:bg-cherry-600 text-white"
            >
              {status === 'loading' ? (
                'Signing up...'
              ) : (
                <>
                  <Heart className="h-4 w-4 mr-2" />
                  Notify Me
                </>
              )}
            </Button>

            {/* Status Message */}
            {status !== 'idle' && status !== 'loading' && (
              <p className={`text-center text-sm ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </form>

          {/* Features */}
          <div className="mt-6 pt-6 border-t border-sand-100">
            <div className="flex items-center justify-center gap-6 text-xs text-sand-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cherry-400" />
                Early Access
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-bay-400" />
                Launch Offers
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400" />
                No Spam
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
