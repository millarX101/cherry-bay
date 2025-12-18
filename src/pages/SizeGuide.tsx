import { Helmet } from 'react-helmet-async'

export default function SizeGuide() {
  return (
    <>
      <Helmet><title>Size Guide | Cherry Bay</title></Helmet>
      <div className="bg-cream min-h-screen">
        <div className="container-wide py-12 md:py-20">
          <h1 className="heading-2 text-charcoal text-center">Size Guide</h1>
          <p className="mt-4 text-sand-600 text-center max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size guide.
          </p>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-sand-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Size</th>
                    <th className="px-4 py-3 text-left font-semibold">Bust (cm)</th>
                    <th className="px-4 py-3 text-left font-semibold">Waist (cm)</th>
                    <th className="px-4 py-3 text-left font-semibold">Hips (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-100">
                  <tr><td className="px-4 py-3">XS</td><td className="px-4 py-3">80-84</td><td className="px-4 py-3">60-64</td><td className="px-4 py-3">86-90</td></tr>
                  <tr><td className="px-4 py-3">S</td><td className="px-4 py-3">84-88</td><td className="px-4 py-3">64-68</td><td className="px-4 py-3">90-94</td></tr>
                  <tr><td className="px-4 py-3">M</td><td className="px-4 py-3">88-92</td><td className="px-4 py-3">68-72</td><td className="px-4 py-3">94-98</td></tr>
                  <tr><td className="px-4 py-3">L</td><td className="px-4 py-3">92-96</td><td className="px-4 py-3">72-76</td><td className="px-4 py-3">98-102</td></tr>
                  <tr><td className="px-4 py-3">XL</td><td className="px-4 py-3">96-100</td><td className="px-4 py-3">76-80</td><td className="px-4 py-3">102-106</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 bg-cherry-50 rounded-xl p-6">
              <h2 className="font-semibold text-charcoal">Pro Tips</h2>
              <ul className="mt-4 space-y-2 text-sand-700">
                <li>• Between sizes? We recommend sizing up for a more comfortable fit.</li>
                <li>• Our bikinis have adjustable straps for a customized fit.</li>
                <li>• Not sure? Contact us for personalized sizing advice!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
