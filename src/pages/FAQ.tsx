import { Helmet } from 'react-helmet-async'

const faqs = [
  { q: 'How do I find my size?', a: 'Check our Size Guide for detailed measurements. If you\'re between sizes, we recommend sizing up.' },
  { q: 'What is your return policy?', a: 'We offer 30-day returns on unworn items with tags attached. See our Returns page for details.' },
  { q: 'How long does shipping take?', a: 'Standard shipping is 5-7 business days. Express shipping is 2-3 business days.' },
  { q: 'Are your swimsuits sustainable?', a: 'Yes! We use 80% recycled materials and eco-friendly packaging.' },
  { q: 'Can I track my order?', a: 'Yes, you\'ll receive a tracking number via email once your order ships.' },
]

export default function FAQ() {
  return (
    <>
      <Helmet><title>FAQ | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <h1 className="heading-2 text-charcoal text-center">Frequently Asked Questions</h1>
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-cherry-500">+</span>
                </summary>
                <p className="mt-4 text-sand-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
