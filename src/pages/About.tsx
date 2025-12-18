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
        <section className="section-padding" id="story">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden bg-sand-100">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop"
                  alt="Cherry Bay founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="heading-2 text-charcoal">Meet the Founder</h2>
                <div className="mt-6 space-y-4 text-sand-700">
                  <p>
                    Hi! I'm the creator behind Cherry Bay. As a young designer with a passion
                    for fashion and a love for the beach lifestyle, I wanted to create swimwear
                    that makes every woman feel beautiful, confident, and bold.
                  </p>
                  <p>
                    Growing up by the coast, I spent countless summers by the water. I noticed
                    that finding swimwear that was both stylish and comfortable was harder than
                    it should be. That's when Cherry Bay was born.
                  </p>
                  <p>
                    Every piece in our collection is designed with love here in Australia,
                    using sustainable materials and ethical practices. Because looking good
                    should feel good too.
                  </p>
                  <p>
                    Thank you for being part of our journey. I hope our swimwear brings you
                    as much joy as it brings me to create it.
                  </p>
                </div>
                <p className="mt-6 font-display text-2xl text-cherry-500">
                  - With love, The Cherry Bay Team
                </p>
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
