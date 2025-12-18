import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'

const stats = [
  { name: 'Total Revenue', value: '$12,450', change: '+12%', icon: DollarSign },
  { name: 'Orders', value: '156', change: '+8%', icon: ShoppingCart },
  { name: 'Customers', value: '89', change: '+23%', icon: Users },
  { name: 'Products', value: '24', change: '0', icon: Package },
]

export default function AdminDashboard() {
  return (
    <>
      <Helmet><title>Admin Dashboard | Cherry Bay</title></Helmet>
      <div className="bg-sand-50 min-h-screen">
        <div className="container-wide py-8">
          <h1 className="heading-2 text-charcoal">Dashboard</h1>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cherry-50 rounded-lg">
                    <stat.icon className="h-5 w-5 text-cherry-500" />
                  </div>
                  <span className="text-sm text-sand-600">{stat.name}</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-charcoal">{stat.value}</p>
                <p className="mt-1 text-sm text-bay-500">{stat.change} from last month</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
                <Link to="/admin/orders" className="text-sm link-cherry">View all</Link>
              </div>
              <div className="mt-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-sand-100 last:border-0">
                    <div>
                      <p className="font-medium">CB-2025-000{i}</p>
                      <p className="text-sm text-sand-600">customer{i}@email.com</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(120 + i * 25).toFixed(2)}</p>
                      <p className="text-sm text-bay-500">Processing</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Low Stock Alerts */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-cherry-500" />
                <h2 className="text-lg font-semibold">Low Stock Alerts</h2>
              </div>
              <div className="mt-4 space-y-4">
                {['Ocean Breeze One Piece - XL', 'Cherry Red Bandeau - L', 'Sandy Beach Halter - XS'].map((item) => (
                  <div key={item} className="flex justify-between items-center py-2 border-b border-sand-100 last:border-0">
                    <p className="text-sm">{item}</p>
                    <span className="px-2 py-1 text-xs bg-cherry-50 text-cherry-600 rounded">Low Stock</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/admin/products/new" className="bg-cherry-500 text-white rounded-xl p-6 hover:bg-cherry-600 transition-colors">
              <Package className="h-8 w-8" />
              <p className="mt-4 font-semibold">Add Product</p>
            </Link>
            <Link to="/admin/orders" className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
              <ShoppingCart className="h-8 w-8 text-bay-500" />
              <p className="mt-4 font-semibold text-charcoal">View Orders</p>
            </Link>
            <Link to="/admin/customers" className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
              <Users className="h-8 w-8 text-bay-500" />
              <p className="mt-4 font-semibold text-charcoal">Customers</p>
            </Link>
            <Link to="/admin/analytics" className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
              <TrendingUp className="h-8 w-8 text-bay-500" />
              <p className="mt-4 font-semibold text-charcoal">Analytics</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
