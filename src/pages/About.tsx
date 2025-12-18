import { Helmet } from 'react-helmet-async'
import { Heart, Leaf, Sun } from 'lucide-react'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Cherry Bay</title>
        <meta name="description" content="Meet the founder of Cherry Bay and learn about our mission to create beautiful, sustainable swimwear." />
      </Helmet>

      <div className="bg-cream">
        {/* Hero */}
        <section className="relative bg-cherry-500 text-white py-20 md:py-32">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="heading-1">Our Story</h1>
              <p className="mt-6 text-xl text-cherry-100">
                Cherry Bay was born from a love of summer, confidence, and self-expression.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24" id="story">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-sand-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop&crop=top"
                  alt="Addi, founder of Cherry Bay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-cherry-500 font-medium text-sm uppercase tracking-wider">Meet the Founder</span>
                <h2 className="heading-2 text-charcoal mt-2">Hi, I'm Addi</h2>
                <div className="mt-6 space-y-5 text-sand-700 text-lg leading-relaxed">
                  <p>
                    I've always loved the beach, feeling healthy, being in the sun and enjoying life outdoors.
                    But finding swimwear that actually felt right for me — and girls my age — was surprisingly hard.
                    Everything seemed to be designed for kids or much older women, with a huge blind spot in between.
                  </p>
                  <p className="font-medium text-charcoal">
                    Cherry Bay started as a way to change that.
                  </p>
                  <p>
                    I'm naturally pretty shy, but designing swimwear gave me a way to express my creative, cheeky side.
                    I wanted to create pieces that help young women feel confident, comfortable and themselves —
                    without having to fit into someone else's idea of what swimwear should be.
                  </p>
                  <p>
                    Every Cherry Bay piece is made for movement, confidence and fun. It's about feeling good in your
                    own skin, looking great, and making the most of time spent in the sun with friends.
                  </p>
                  <p className="italic text-sand-600">
                    Cherry Bay is my way of turning a gap in the market into something positive — swimwear for
                    the younger generation that actually feels like us.
                  </p>
                </div>
                <p className="mt-8 font-display text-2xl text-cherry-500">
                  — Addi
                </p>
                <p className="text-sm text-sand-500 mt-1">Founder, Cherry Bay</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="heading-2 text-charcoal text-center">What We Stand For</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-cherry-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-cherry-500" />
                </div>
                <h3 className="mt-6 text-xl font-display font-semibold text-charcoal">
                  Confidence
                </h3>
                <p className="mt-4 text-sand-600">
                  We design swimwear that makes you feel amazing in your own skin.
                  Every body is a beach body.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-bay-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-bay-500" />
                </div>
                <h3 className="mt-6 text-xl font-display font-semibold text-charcoal">
                  Sustainability
                </h3>
                <p className="mt-4 text-sand-600">
                  We use recycled materials and eco-friendly practices to protect
                  the oceans we love.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-sand-200 rounded-full flex items-center justify-center">
                  <Sun className="h-8 w-8 text-sand-600" />
                </div>
                <h3 className="mt-6 text-xl font-display font-semibold text-charcoal">
                  Quality
                </h3>
                <p className="mt-4 text-sand-600">
                  Premium fabrics, thoughtful designs, and attention to detail
                  in every piece.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="section-padding bg-bay-500 text-white" id="sustainability">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2">Our Commitment to the Planet</h2>
              <p className="mt-6 text-bay-100 text-lg">
                We believe that beautiful swimwear shouldn't come at the cost of our planet.
                That's why we're committed to using recycled materials, reducing waste,
                and supporting ocean conservation initiatives.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <div className="bg-white/10 rounded-lg px-6 py-4">
                  <p className="text-3xl font-bold">80%</p>
                  <p className="text-sm text-bay-100">Recycled Materials</p>
                </div>
                <div className="bg-white/10 rounded-lg px-6 py-4">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-bay-100">Recyclable Packaging</p>
                </div>
                <div className="bg-white/10 rounded-lg px-6 py-4">
                  <p className="text-3xl font-bold">1%</p>
                  <p className="text-sm text-bay-100">Donated to Ocean Cleanup</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
