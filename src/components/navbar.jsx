import { Icon, TextField } from '@fluentui/react'
import './navbar.css'

const categories = ['Todos', 'Limpieza', 'Papelería', 'Hogar']

const Navbar = () => {
  return (
    <header className="navbar-shell">
      <div className="navbar-topbar">
        <span className="navbar-topbar-text">Tu tienda de barrio de confianza</span>
        <span className="navbar-topbar-link">Nosotros</span>
      </div>

      <div className="navbar-mainbar">
        <div className="navbar-brand">TIENDA</div>

        <div className="navbar-search">
          <TextField
            placeholder="Buscar productos..."
            iconProps={{ iconName: 'Search' }}
            styles={{
              root: { width: '100%' },
              fieldGroup: {
                height: '40px',
                borderRadius: '0',
                borderColor: '#d9d9d9',
              },
              field: {
                fontSize: '18px',
                paddingLeft: '10px',
              },
            }}
          />
        </div>

        <div className="navbar-actions" aria-label="Acciones de usuario">
          <Icon iconName="Contact" className="navbar-action-icon" />
          <Icon iconName="ShoppingCart" className="navbar-action-icon" />
        </div>
      </div>

      <nav className="navbar-categories" aria-label="Categorías">
        {categories.map((category) => (
          <span key={category} className="navbar-category-link">
            {category}
          </span>
        ))}
      </nav>
    </header>
  )
}

export default Navbar