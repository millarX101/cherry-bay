import { Helmet } from 'react-helmet-async'

export default function Shipping() {
  return (
    <>
      <Helmet><title>Shipping | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="heading-2 text-charcoal">Shipping Information</h1>
            <div className="mt-8 prose prose-sand">
              <h2>Domestic Shipping (Australia)</h2>
              <ul>
                <li>Standard Shipping: $9.95 (5-7 business days)</li>
                <li>Express Shipping: $14.95 (2-3 business days)</li>
                <li><strong>FREE standard shipping on orders over $100!</strong></li>
              </ul>
              <h2>International Shipping</h2>
              <ul>
                <li>New Zealand: $15.95 (7-10 business days)</li>
                <li>USA/UK: $24.95 (10-14 business days)</li>
                <li>Rest of World: $29.95 (14-21 business days)</li>
              </ul>
              <h2>Order Processing</h2>
              <p>Orders are processed within 1-2 business days. You'll receive a tracking number via email once your order ships.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
