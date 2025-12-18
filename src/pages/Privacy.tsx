import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <>
      <Helmet><title>Privacy Policy | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="heading-2 text-charcoal">Privacy Policy</h1>
            <p className="mt-4 text-sand-600">Last updated: January 2025</p>
            <div className="mt-8 prose prose-sand">
              <p>At Cherry Bay, we are committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly, such as your name, email, shipping address, and payment information when you make a purchase.</p>
              <h2>How We Use Your Information</h2>
              <ul>
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your order</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
              </ul>
              <h2>Data Security</h2>
              <p>We use industry-standard encryption to protect your personal and payment information.</p>
              <h2>Contact Us</h2>
              <p>For privacy inquiries, email us at privacy@cherrybay.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
