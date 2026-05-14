import { Icon, TextField, ScrollablePane, ScrollbarVisibility } from '@fluentui/react'
import { useState, useEffect, useContext, useRef, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBoolean } from '@fluentui/react-hooks'
import gsap from 'gsap'
import ShoppingCart from './ShoppingCart'
import { CartContext } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import './css/navbar.css'

const categories = [
  { name: 'Todos', path: '/categoria/todos' },
  {
    name: 'Limpieza',
    path: '/categoria/limpieza',
    subcategorias: [
      { name: 'Limpieza General', path: '/categoria/limpieza?sub=limpieza-general' },
      { name: 'Desinfectantes', path: '/categoria/limpieza?sub=desinfectantes' },
      { name: 'Protección', path: '/categoria/limpieza?sub=proteccion' },
    ]
  },
  {
    name: 'Papelería',
    path: '/categoria/papeleria',
    subcategorias: [
      { name: 'Cuadernos', path: '/categoria/papeleria?sub=cuadernos' },
      { name: 'Escritura', path: '/categoria/papeleria?sub=escritura' },
      { name: 'Archivos y Organizadores', path: '/categoria/papeleria?sub=archivos-organizadores' },
    ]
  },
  {
    name: 'Hogar',
    path: '/categoria/hogar',
    subcategorias: [
      { name: 'Decoración', path: '/categoria/hogar?sub=decoracion' },
      { name: 'Baño', path: '/categoria/hogar?sub=baño' },
      { name: 'Cocina', path: '/categoria/hogar?sub=cocina' },
    ]
  },
  {
    name: 'Juguetería',
    path: '/categoria/jugueteria',
    subcategorias: [
      { name: 'Juguetes Educativos', path: '/categoria/jugueteria?sub=juguetes-educativos' },
      { name: 'Juegos de Mesa', path: '/categoria/jugueteria?sub=juegos-mesa' },
      { name: 'Juguetes Deportivos', path: '/categoria/jugueteria?sub=juguetes-deportivos' },
    ]
  },
  {
    name: 'Piñatería',
    path: '/categoria/piñateria',
    subcategorias: [
      { name: 'Piñatas', path: '/categoria/piñateria?sub=piñatas' },
      { name: 'Accesorios para Piñatas', path: '/categoria/piñateria?sub=accesorios-piñatas' },
      { name: 'Decoración de Fiestas', path: '/categoria/piñateria?sub=decoracion-fiestas' },
    ]
  },
  {
    name: 'Maquillaje',
    path: '/categoria/maquillaje',
    subcategorias: [
      { name: 'Base y Cobertura', path: '/categoria/maquillaje?sub=base-cobertura' },
      { name: 'Ojos', path: '/categoria/maquillaje?sub=ojos' },
      { name: 'Labios', path: '/categoria/maquillaje?sub=labios' },
    ]
  },
  {
    name: 'Herramientas',
    path: '/categoria/herramientas',
    subcategorias: [
      { name: 'Herramientas Manuales', path: '/categoria/herramientas?sub=herramientas-manuales' },
      { name: 'Medición', path: '/categoria/herramientas?sub=medicion' },
      { name: 'Seguridad', path: '/categoria/herramientas?sub=seguridad' },
    ]
  },
  {
    name: 'Ferretería',
    path: '/categoria/ferreteria',
    subcategorias: [
      { name: 'Materiales de Construcción', path: '/categoria/ferreteria?sub=materiales-construccion' },
      { name: 'Tornillos y Tuercas', path: '/categoria/ferreteria?sub=tornillos-tuercas' },
      { name: 'Pinturas y Acabados', path: '/categoria/ferreteria?sub=pinturas-acabados' },
    ]
  },
  {
    name: 'Clima y Estación',
    path: '/categoria/clima',
    subcategorias: [
      { name: 'Productos para Lluvia', path: '/categoria/clima?sub=productos-lluvia' },
      { name: 'Productos para Frío', path: '/categoria/clima?sub=productos-frio' },
      { name: 'Productos para Calor', path: '/categoria/clima?sub=productos-calor' },
      { name: 'Productos para Humedad', path: '/categoria/clima?sub=productos-humedad' },
      { name: 'Productos de Temporada', path: '/categoria/clima?sub=productos-temporada' },
    ]
  },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)

  const [isCartOpen, { setTrue: openCart, setFalse: dismissCart }] = useBoolean(false)

  const { cartItems } = useContext(CartContext)
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()

  const searchRef = useRef(null)
  const sideMenuRef = useRef(null)
  const overlayRef = useRef(null)

  // Memoizar funciones para evitar re-renders
  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true)
    gsap.to(sideMenuRef.current, {
      left: 0,
      duration: 0.3,
      ease: 'power3.out',
    })
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out',
      })
    }
  }, [])

  const handleMenuClose = useCallback(() => {
    gsap.to(sideMenuRef.current, {
      left: -280,
      duration: 0.3,
      ease: 'power3.out',
    })
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      })
    }
    setIsMenuOpen(false)
  }, [])

  const handleCategoryToggle = useCallback((categoryName) => {
    setExpandedCategory((prev) => (prev === categoryName ? null : categoryName))
  }, [])

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
        <div className="menu-overlay" ref={overlayRef} onClick={handleMenuClose} />
      )}

      {/* SIDEBAR */}
      <div className="side-menu" ref={sideMenuRef}>
        <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto} className="side-menu-scrollable">
          <div className="side-menu-header">
            <span>Categorías</span>
            <Icon iconName="Cancel" onClick={handleMenuClose} />
          </div>

          <nav className="side-menu-content">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="side-menu-item">
                  <Link
                    to={category.path}
                    className="side-menu-link"
                    onClick={handleMenuClose}
                  >
                    {category.name}
                  </Link>
                  {category.subcategorias && (
                    <Icon
                      iconName={expandedCategory === category.name ? 'ChevronUp' : 'ChevronDown'}
                      onClick={() => handleCategoryToggle(category.name)}
                      style={{ cursor: 'pointer', marginLeft: 'auto' }}
                    />
                  )}
                </div>

                {category.subcategorias && expandedCategory === category.name && (
                  <div className="side-menu-submenu">
                    {category.subcategorias.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="side-menu-sublink"
                        onClick={handleMenuClose}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </ScrollablePane>
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
            onClick={handleMenuOpen}
          />

          {/* LOGO */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="navbar-brand">EL REY</div>
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