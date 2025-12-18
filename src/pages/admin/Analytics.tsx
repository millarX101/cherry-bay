import { Helmet } from 'react-helmet-async'
import { TrendingUp, DollarSign, ShoppingCart, Users } from 'lucide-react'

export default function AdminAnalytics() {
  return (
    <>
      <Helmet><title>Analytics | Admin | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <h1 className="heading-2 text-charcoal">Analytics</h1>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Revenue', value: '$12,450', change: '+12%', icon: DollarSign },
              { label: 'Orders', value: '156', change: '+8%', icon: ShoppingCart },
              { label: 'Customers', value: '89', change: '+23%', icon: Users },
              { label: 'Avg Order Value', value: '$79.80', change: '+5%', icon: TrendingUp },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cherry-50 rounded-lg">
                    <stat.icon className="h-5 w-5 text-cherry-500" />
                  </div>
                  <span className="text-sm text-sand-600">{stat.label}</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-charcoal">{stat.value}</p>
                <p className="mt-1 text-sm text-bay-500">{stat.change} vs last period</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Revenue Over Time</h2>
              <div className="h-64 flex items-center justify-center text-sand-400">
                Chart placeholder - integrate Recharts
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
              <div className="space-y-4">
                {[
                  { name: 'Coral Sunset Triangle Top', sales: 45, revenue: 2925 },
                  { name: 'Cherry Red Bandeau Top', sales: 38, revenue: 2660 },
                  { name: 'Ocean Breeze One Piece', sales: 32, revenue: 3840 },
                ].map((product, i) => (
                  <div key={product.name} className="flex items-center gap-4">
                    <span className="w-6 h-6 bg-cherry-100 text-cherry-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-charcoal">{product.name}</p>
                      <p className="text-sm text-sand-600">{product.sales} sales</p>
                    </div>
                    <p className="font-semibold">${product.revenue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
