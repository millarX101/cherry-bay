import { Helmet } from 'react-helmet-async'
import { Heart, Leaf, Sun, Waves } from 'lucide-react'
import { getStorageUrl } from '@/lib/supabase'

export default function About() {
  return (
    <>
      <Helmet>
        <title>Our Story | Cherry Bay</title>
        <meta name="description" content="Cherry Bay - swimwear designed for confidence. Learn about our mission to create beautiful, sustainable swimwear for sun-seekers everywhere." />
      </Helmet>

      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={getStorageUrl('Hero 2.png')}
          alt="Cherry Bay swimwear"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <span className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold max-w-3xl leading-tight">
            Born from a Love of Summer
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
            Swimwear designed for confidence, made for sun-seekers
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-charcoal">
              Why Cherry Bay?
            </h2>
            <div className="mt-8 space-y-6 text-sand-700 text-lg leading-relaxed">
              <p>
                Finding swimwear that actually feels right shouldn't be so hard.
                Too often, options seem designed for everyone except you — leaving
                a huge gap for those who want something that fits their style and stage of life.
              </p>
              <p className="text-xl font-medium text-charcoal">
                Cherry Bay was created to change that.
              </p>
              <p>
                We design swimwear for movement, confidence, and fun. Pieces that help you
                feel comfortable and yourself — without having to fit into someone else's
                idea of what swimwear should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-charcoal">
              What We Stand For
            </h2>
            <p className="mt-4 text-sand-600 max-w-xl mx-auto">
              Every piece we create is guided by these core values
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Confidence */}
            <div className="bg-sand-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-cherry-500 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-charcoal">
                Confidence
              </h3>
              <p className="mt-4 text-sand-600 leading-relaxed">
                We design swimwear that makes you feel amazing in your own skin.
                Every body is a beach body.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-sand-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-bay-500 rounded-full flex items-center justify-center">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-charcoal">
                Sustainability
              </h3>
              <p className="mt-4 text-sand-600 leading-relaxed">
                We use recycled materials and eco-friendly practices to protect
                the oceans we love.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-sand-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-sand-500 rounded-full flex items-center justify-center">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-charcoal">
                Quality
              </h3>
              <p className="mt-4 text-sand-600 leading-relaxed">
                Premium fabrics, thoughtful designs, and attention to detail
                in every piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planet Commitment - Full Width */}
      <section className="relative py-24 md:py-32 bg-bay-500 overflow-hidden">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white">
          <svg className="absolute bottom-0 w-full h-16 text-bay-500" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path fill="currentColor" d="M0 22L60 16.7C120 11 240 1 360 0.7C480 1 600 11 720 21.3C840 32 960 43 1080 43.3C1200 43 1320 32 1380 27L1440 22V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"/>
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Waves className="h-8 w-8 text-bay-200" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white text-center">
            Our Commitment to the Planet
          </h2>
          <p className="mt-6 text-bay-100 text-lg text-center max-w-2xl mx-auto leading-relaxed">
            Beautiful swimwear shouldn't come at the cost of our planet.
            We're committed to using recycled materials, reducing waste,
            and supporting ocean conservation initiatives.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-white">80%</p>
              <p className="mt-2 text-sm md:text-base text-bay-200">Recycled Materials</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-white">100%</p>
              <p className="mt-2 text-sm md:text-base text-bay-200">Recyclable Packaging</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-white">1%</p>
              <p className="mt-2 text-sm md:text-base text-bay-200">Ocean Cleanup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 4 Image Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={getStorageUrl('Hero 4.jpg')}
          alt="Cherry Bay lifestyle"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-display text-charcoal leading-relaxed">
              "It's about feeling good in your own skin, looking great, and making the most
              of time spent in the sun."
            </p>
            <p className="mt-8 text-cherry-500 font-medium tracking-wide uppercase text-sm">
              — The Cherry Bay Team
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
