
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoContextProvider } from './Context/Logic.jsx'

createRoot(document.getElementById('root')).render(
<TodoContextProvider>
    <App />
</TodoContextProvider>




)
