// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { AuthContextProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

  <AuthContextProvider>
    <StrictMode>
      <App />
    </StrictMode>

  </AuthContextProvider>




)
