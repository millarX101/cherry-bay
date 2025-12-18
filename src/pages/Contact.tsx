import { Helmet } from 'react-helmet-async'
import { Mail, Instagram, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Cherry Bay</title>
      </Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-2 text-charcoal text-center">Get in Touch</h1>
            <p className="mt-4 text-sand-600 text-center max-w-2xl mx-auto">
              Have a question about sizing, orders, or just want to say hi? We'd love to hear from you!
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-display font-semibold text-charcoal">Contact Info</h2>
                <div className="mt-6 space-y-4">
                  <a href="mailto:hello@cherrybay.com" className="flex items-center gap-3 text-sand-700 hover:text-cherry-500">
                    <Mail className="h-5 w-5 text-cherry-500" />
                    hello@cherrybay.com
                  </a>
                  <a href="https://instagram.com/cherrybay" className="flex items-center gap-3 text-sand-700 hover:text-cherry-500">
                    <Instagram className="h-5 w-5 text-cherry-500" />
                    @cherrybay
                  </a>
                  <p className="flex items-center gap-3 text-sand-700">
                    <MapPin className="h-5 w-5 text-cherry-500" />
                    Gold Coast, Australia
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-charcoal">Name</label>
                  <Input className="mt-1" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Email</label>
                  <Input className="mt-1" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Message</label>
                  <textarea
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[120px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-500"
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
