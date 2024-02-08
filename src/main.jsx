import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './Providers/filters.jsx'
import "./Styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
