import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex items-center justify-center h-screen'>
      <App />
    </div>
  </React.StrictMode>,
)
