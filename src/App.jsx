import Navbar from './components/navbar.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Body } from './components/body.jsx'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'
import Blog from './components/blog.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import CategoryPage from './components/CategoryPage.jsx'
import FinalizarCompra from './components/finalizarCompra.jsx'
import Login from './components/login.jsx'
import Config from './components/config.jsx'
import DataPerfil from './components/dataperfil.jsx'
import MyShops from './components/myshops.jsx'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categoria/:categoria" element={<CategoryPage />} />
            <Route path="/finalizar-compra" element={<FinalizarCompra />} />
            <Route path="/login" element={<Login />} />
            <Route path="/config" element={<Config />} />
            <Route path="/dataperfil" element={<DataPerfil />} />
            <Route path="/myshops" element={<MyShops />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App