import { Helmet } from 'react-helmet-async'

export default function Returns() {
  return (
    <>
      <Helmet><title>Returns | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="heading-2 text-charcoal">Returns & Exchanges</h1>
            <div className="mt-8 prose prose-sand">
              <h2>30-Day Return Policy</h2>
              <p>We want you to love your Cherry Bay swimwear! If you're not completely satisfied, you can return unworn items within 30 days of delivery.</p>
              <h2>Return Conditions</h2>
              <ul>
                <li>Items must be unworn with all tags attached</li>
                <li>Hygiene liner must be intact</li>
                <li>Items must be in original packaging</li>
                <li>Sale items are final sale</li>
              </ul>
              <h2>How to Return</h2>
              <ol>
                <li>Email us at returns@cherrybay.com with your order number</li>
                <li>We'll send you a prepaid return label</li>
                <li>Pack your items securely and drop off at your nearest post office</li>
                <li>Refunds are processed within 5-7 business days of receiving your return</li>
              </ol>
              <h2>Exchanges</h2>
              <p>Need a different size? Email us and we'll help arrange an exchange free of charge.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
