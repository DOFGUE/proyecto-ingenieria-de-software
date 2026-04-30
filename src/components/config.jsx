import { Icon, TextField, PrimaryButton, DefaultButton } from '@fluentui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/config.css'

const Config = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: 'Administrador',
    email: user?.email || 'admin@gmail.com',
    telefono: '',
    direccion: '',
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    alert('Configuración guardada correctamente')
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="config-container">
      <div className="config-card">
        <div className="config-header">
          <Link to="/" className="config-logo">
            TIENDA
          </Link>
          <h1 className="config-title">Configuración</h1>
          <p className="config-subtitle">Administra tu cuenta</p>
        </div>

        <div className="config-section">
          <h2 className="config-section-title">
            <Icon iconName="Person" />
            Datos personales
          </h2>
          
          <div className="config-field">
            <label className="config-label">Nombre</label>
            <TextField
              value={formData.nombre}
              onChange={(e, newValue) => handleChange('nombre', newValue)}
              styles={{
                root: { marginBottom: '16px' },
                fieldGroup: {
                  height: '44px',
                  borderRadius: '8px',
                },
              }}
            />
          </div>

          <div className="config-field">
            <label className="config-label">Correo electrónico</label>
            <TextField
              value={formData.email}
              onChange={(e, newValue) => handleChange('email', newValue)}
              disabled
              styles={{
                root: { marginBottom: '16px' },
                fieldGroup: {
                  height: '44px',
                  borderRadius: '8px',
                },
              }}
            />
          </div>

          <div className="config-field">
            <label className="config-label">Teléfono</label>
            <TextField
              placeholder="Ingresa tu teléfono"
              value={formData.telefono}
              onChange={(e, newValue) => handleChange('telefono', newValue)}
              iconProps={{ iconName: 'Phone' }}
              styles={{
                root: { marginBottom: '16px' },
                fieldGroup: {
                  height: '44px',
                  borderRadius: '8px',
                },
              }}
            />
          </div>

          <div className="config-field">
            <label className="config-label">Dirección</label>
            <TextField
              placeholder="Ingresa tu dirección"
              value={formData.direccion}
              onChange={(e, newValue) => handleChange('direccion', newValue)}
              iconProps={{ iconName: 'Location' }}
              styles={{
                root: { marginBottom: '16px' },
                fieldGroup: {
                  height: '44px',
                  borderRadius: '8px',
                },
              }}
            />
          </div>

          <PrimaryButton
            text="Guardar cambios"
            onClick={handleSave}
            className="config-save-button"
            styles={{
              root: {
                width: '100%',
                height: '44px',
                fontSize: '15px',
              },
            }}
          />
        </div>

        <div className="config-section">
          <h2 className="config-section-title">
            <Icon iconName="Lock" />
            Seguridad
          </h2>
          
          <DefaultButton
            text="Cambiar contraseña"
            className="config-option-button"
            styles={{
              root: {
                width: '100%',
                height: '44px',
                justifyContent: 'flex-start',
              },
            }}
            iconProps={{ iconName: 'Edit' }}
          />
        </div>

        <div className="config-section config-logout-section">
          <DefaultButton
            text="Cerrar sesión"
            onClick={handleLogout}
            className="config-logout-button"
            styles={{
              root: {
                width: '100%',
                height: '44px',
                background: '#d13438',
                color: 'white',
              },
            }}
            iconProps={{ iconName: 'SignOut' }}
          />
        </div>

        <Link to="/" className="config-back">
          <Icon iconName="Back" />
          <span>Volver a la tienda</span>
        </Link>
      </div>
    </div>
  )
}

export default Config