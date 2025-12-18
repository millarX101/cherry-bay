import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { CartProvider } from '@/context/CartContext'
import { Layout } from '@/components/layout/Layout'

// Pages
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import CheckoutSuccess from '@/pages/CheckoutSuccess'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import SizeGuide from '@/pages/SizeGuide'
import FAQ from '@/pages/FAQ'
import Shipping from '@/pages/Shipping'
import Returns from '@/pages/Returns'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Account from '@/pages/Account'
import Wishlist from '@/pages/Wishlist'
import NotFound from '@/pages/NotFound'

// Admin Pages
import AdminDashboard from '@/pages/admin/Dashboard'
import AdminProducts from '@/pages/admin/Products'
import AdminProductForm from '@/pages/admin/ProductForm'
import AdminOrders from '@/pages/admin/Orders'
import AdminOrderDetail from '@/pages/admin/OrderDetail'
import AdminCustomers from '@/pages/admin/Customers'
import AdminDiscountCodes from '@/pages/admin/DiscountCodes'
import AdminAnalytics from '@/pages/admin/Analytics'

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:category" element={<Shop />} />
              <Route path="product/:slug" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkout/success" element={<CheckoutSuccess />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="size-guide" element={<SizeGuide />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="shipping" element={<Shipping />} />
              <Route path="returns" element={<Returns />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="account" element={<Account />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<Layout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="products/new" element={<AdminProductForm />} />
              <Route path="products/:id/edit" element={<AdminProductForm />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="orders/:id" element={<AdminOrderDetail />} />
              <Route path="customers" element={<AdminCustomers />} />
              <Route path="discount-codes" element={<AdminDiscountCodes />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </HelmetProvider>
  )
}

export default App
