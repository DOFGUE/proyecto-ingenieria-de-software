import { Icon, TextField, PrimaryButton } from '@fluentui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/login.css'

// Credenciales estáticas
const STATIC_EMAIL = 'admin@gmail.com'
const STATIC_PASSWORD = '123456789'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      login({ email })
      navigate('/')
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Link to="/" className="login-logo">
            TIENDA
          </Link>
          <h1 className="login-title">Bienvenido de nuevo</h1>
          <p className="login-subtitle">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label className="login-label">Correo electrónico</label>
            <TextField
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e, newValue) => setEmail(newValue)}
              iconProps={{ iconName: 'Mail' }}
              required
              styles={{
                root: { marginBottom: '16px' },
                fieldGroup: {
                  height: '48px',
                  borderRadius: '8px',
                },
                field: {
                  fontSize: '16px',
                },
              }}
            />
          </div>

          <div className="login-field">
            <label className="login-label">Contraseña</label>
            <TextField
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e, newValue) => setPassword(newValue)}
              iconProps={{ iconName: 'Lock' }}
              required
              styles={{
                root: { marginBottom: '8px' },
                fieldGroup: {
                  height: '48px',
                  borderRadius: '8px',
                },
                field: {
                  fontSize: '16px',
                },
              }}
            />
            <button
              type="button"
              className="login-show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon iconName={showPassword ? 'Hide' : 'View'} />
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

          {error && <div className="login-error">{error}</div>}

          <div className="login-options">
            <label className="login-remember">
              <input type="checkbox" />
              <span>Recordarme</span>
            </label>
            <Link to="/forgot-password" className="login-forgot">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <PrimaryButton
            type="submit"
            text="Iniciar sesión"
            className="login-button"
            styles={{
              root: {
                width: '100%',
                height: '48px',
                fontSize: '16px',
                fontWeight: 600,
              },
            }}
          />
        </form>

        <div className="login-divider">
          <span>o</span>
        </div>

        <div className="login-social">
          <button className="login-social-button google">
            <Icon iconName="Google" />
            <span>Continuar con Google</span>
          </button>
          <button className="login-social-button facebook">
            <Icon iconName="FacebookLogo" />
            <span>Continuar con Facebook</span>
          </button>
        </div>

        <div className="login-footer">
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="login-register">
              Regístrate
            </Link>
          </p>
        </div>

        <Link to="/" className="login-back">
          <Icon iconName="Back" />
          <span>Volver a la tienda</span>
        </Link>
      </div>
    </div>
  )
}

export default Login