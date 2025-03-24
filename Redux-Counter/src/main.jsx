
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux-Component/Store.jsx'
import { TodoList } from './Slice-Component/CounterList.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
    <TodoList/>
  </Provider>,
)
