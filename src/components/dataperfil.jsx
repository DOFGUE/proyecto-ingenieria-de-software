import { Icon, TextField, PrimaryButton, DefaultButton } from '@fluentui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/dataperfil.css'

const DataPerfil = () => {
  const { user, isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    nombre: 'Administrador',
    email: user?.email || 'admin@gmail.com',
    telefono: '+57 300 123 4567',
    direccion: 'Calle 123 # 45-67, Bogotá',
    documento: '123456789',
    fechaNacimiento: '1990-01-15',
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    alert('Perfil actualizado correctamente')
  }

  if (isLoggedIn !== 1) {
    return (
      <div className="perfil-container">
        <div className="perfil-card">
          <div className="perfil-error">
            <Icon iconName="Warning" />
            <h2>Acceso denegado</h2>
            <p>Debes iniciar sesión para ver tu perfil.</p>
            <PrimaryButton
              text="Ir a iniciar sesión"
              onClick={() => navigate('/login')}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-header">
          <div className="perfil-avatar">
            <Icon iconName="Contact" />
          </div>
          <h1 className="perfil-title">Mi Perfil</h1>
          <p className="perfil-subtitle">Gestiona tu información personal</p>
        </div>

        <div className="perfil-section">
          <div className="perfil-field">
            <label className="perfil-label">
              <Icon iconName="Person" />
              Nombre completo
            </label>
            {isEditing ? (
              <TextField
                value={formData.nombre}
                onChange={(e, newValue) => handleChange('nombre', newValue)}
                styles={{
                  root: { marginBottom: '16px' },
                  fieldGroup: { height: '44px', borderRadius: '8px' },
                }}
              />
            ) : (
              <div className="perfil-value">{formData.nombre}</div>
            )}
          </div>

          <div className="perfil-field">
            <label className="perfil-label">
              <Icon iconName="Mail" />
              Correo electrónico
            </label>
            <div className="perfil-value">{formData.email}</div>
          </div>

          <div className="perfil-field">
            <label className="perfil-label">
              <Icon iconName="Phone" />
              Teléfono
            </label>
            {isEditing ? (
              <TextField
                value={formData.telefono}
                onChange={(e, newValue) => handleChange('telefono', newValue)}
                styles={{
                  root: { marginBottom: '16px' },
                  fieldGroup: { height: '44px', borderRadius: '8px' },
                }}
              />
            ) : (
              <div className="perfil-value">{formData.telefono}</div>
            )}
          </div>

          <div className="perfil-field">
            <label className="perfil-label">
              <Icon iconName="Location" />
              Dirección
            </label>
            {isEditing ? (
              <TextField
                value={formData.direccion}
                onChange={(e, newValue) => handleChange('direccion', newValue)}
                styles={{
                  root: { marginBottom: '16px' },
                  fieldGroup: { height: '44px', borderRadius: '8px' },
                }}
              />
            ) : (
              <div className="perfil-value">{formData.direccion}</div>
            )}
          </div>

          <div className="perfil-field">
            <label className="perfil-label">
              <Icon iconName="Certificate" />
              Documento de identidad
            </label>
            <div className="perfil-value">{formData.documento}</div>
          </div>

          <div className="perfil-field">
            <label className="perfil-label">
              <Icon iconName="Calendar" />
              Fecha de nacimiento
            </label>
            {isEditing ? (
              <TextField
                type="date"
                value={formData.fechaNacimiento}
                onChange={(e, newValue) => handleChange('fechaNacimiento', newValue)}
                styles={{
                  root: { marginBottom: '16px' },
                  fieldGroup: { height: '44px', borderRadius: '8px' },
                }}
              />
            ) : (
              <div className="perfil-value">{formData.fechaNacimiento}</div>
            )}
          </div>
        </div>

        <div className="perfil-actions">
          {isEditing ? (
            <>
              <PrimaryButton
                text="Guardar cambios"
                onClick={handleSave}
                className="perfil-save-button"
                styles={{
                  root: { flex: 1, height: '44px' },
                }}
              />
              <DefaultButton
                text="Cancelar"
                onClick={() => setIsEditing(false)}
                className="perfil-cancel-button"
                styles={{
                  root: { flex: 1, height: '44px', marginLeft: '12px' },
                }}
              />
            </>
          ) : (
            <PrimaryButton
              text="Editar perfil"
              onClick={() => setIsEditing(true)}
              className="perfil-edit-button"
              iconProps={{ iconName: 'Edit' }}
              styles={{
                root: { width: '100%', height: '44px' },
              }}
            />
          )}
        </div>

        <Link to="/" className="perfil-back">
          <Icon iconName="Back" />
          <span>Volver a la tienda</span>
        </Link>
      </div>
    </div>
  )
}

export default DataPerfil