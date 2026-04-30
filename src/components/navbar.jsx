import { Icon, TextField } from '@fluentui/react'
import { useState, useEffect, useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBoolean } from '@fluentui/react-hooks'
import ShoppingCart from './ShoppingCart'
import { CartContext } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import './css/navbar.css'

const categories = [
  { name: 'Todos', path: '/categoria/todos' },
  { name: 'Limpieza', path: '/categoria/limpieza' },
  { name: 'Papelería', path: '/categoria/papeleria' },
  { name: 'Hogar', path: '/categoria/hogar' },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const [isCartOpen, { setTrue: openCart, setFalse: dismissCart }] = useBoolean(false)

  const { cartItems } = useContext(CartContext)
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()

  const searchRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* OVERLAY */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* SIDEBAR */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <span>Categorías</span>
          <Icon iconName="Cancel" onClick={() => setIsMenuOpen(false)} />
        </div>

        <nav className="side-menu-content">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="side-menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* NAVBAR */}
      <header className={`navbar-shell ${isVisible ? 'visible' : 'hidden'}`}>

        <div className="navbar-topbar">
          <span className="navbar-topbar-text">El Rey de la cacharrería</span>
          <Link to="/about" className="navbar-topbar-link">Nosotros</Link>
        </div>

        <div className="navbar-mainbar">

          {/* ☰ MENU */}
          <Icon
            iconName="GlobalNavButton"
            className="navbar-action-icon"
            onClick={() => setIsMenuOpen(true)}
          />

          {/* LOGO */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="navbar-brand">ELREY</div>
          </Link>

          {/* ACCIONES */}
          <div className="navbar-actions">

            {/* 🔍 BUSCADOR */}
            <div
              className={`search-container ${isSearchOpen ? 'active' : ''}`}
              ref={searchRef}
            >
              <Icon
                iconName="Search"
                className="navbar-action-icon"
                onClick={() => setIsSearchOpen(true)}
              />

              <TextField
                className="search-input"
                placeholder={isSearchOpen ? "Buscar productos..." : ""}
                autoFocus={isSearchOpen}
                styles={{
                  fieldGroup: {
                    border: 'none',
                    background: 'transparent',
                    boxShadow: 'none',
                  },
                  field: {
                    background: 'transparent',
                    color: '#111',
                  },
                }}
              />
            </div>

            {/* 👤 USUARIO */}
            {isLoggedIn === 1 ? (
              <>
                <Icon iconName="Contact" className="navbar-action-icon" onClick={() => navigate('/dataperfil')} />
                <Icon iconName="Shop" className="navbar-action-icon" onClick={() => navigate('/myshops')} />
                <Icon iconName="Settings" className="navbar-action-icon" onClick={() => navigate('/config')} />
                <Icon
                  iconName="SignOut"
                  className="navbar-action-icon"
                  onClick={() => {
                    logout()
                    navigate('/')
                  }}
                />
              </>
            ) : (
              <Icon iconName="Contact" className="navbar-action-icon" onClick={() => navigate('/login')} />
            )}

            {/* 🛒 CARRITO */}
            <div
              onClick={openCart}
              style={{
                position: 'relative',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <Icon iconName="ShoppingCart" className="navbar-action-icon" />

              {cartItems.length > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    background: '#d13438',
                    color: 'white',
                    borderRadius: '50%',
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>

          </div>
        </div>

        <ShoppingCart isOpen={isCartOpen} dismissPanel={dismissCart} />
      </header>
    </>
  )
}

export default Navbar