import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(0)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('isLoggedIn')
    if (stored) {
      setIsLoggedIn(parseInt(stored, 10))
    }
  }, [])

  const login = (userData) => {
    setIsLoggedIn(1)
    setUser(userData)
    localStorage.setItem('isLoggedIn', '1')
  }

  const logout = () => {
    setIsLoggedIn(0)
    setUser(null)
    localStorage.setItem('isLoggedIn', '0')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext