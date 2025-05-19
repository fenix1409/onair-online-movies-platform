import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { ActionContext } from './context/useContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ActionContext>
      <App />
    </ActionContext>
  </BrowserRouter>
)
