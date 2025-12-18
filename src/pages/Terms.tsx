import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <>
      <Helmet><title>Terms of Service | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="heading-2 text-charcoal">Terms of Service</h1>
            <p className="mt-4 text-sand-600">Last updated: January 2025</p>
            <div className="mt-8 prose prose-sand">
              <p>Welcome to Cherry Bay. By using our website and purchasing our products, you agree to these terms.</p>
              <h2>Orders & Payment</h2>
              <p>All prices are in AUD. We accept major credit cards and PayPal. Orders are subject to availability.</p>
              <h2>Shipping</h2>
              <p>Shipping times are estimates. We are not responsible for delays caused by shipping carriers.</p>
              <h2>Returns</h2>
              <p>Please see our Returns page for our full return policy.</p>
              <h2>Intellectual Property</h2>
              <p>All content on this website is owned by Cherry Bay and may not be reproduced without permission.</p>
              <h2>Limitation of Liability</h2>
              <p>Cherry Bay is not liable for any indirect or consequential damages arising from the use of our products or website.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
