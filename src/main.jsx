import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/css/style.css'

import { RouterProvider } from 'react-router-dom'
import FreshFlowRouter from './components/router/FreshFlowRouter.jsx'
import ContextProvider from './components/context/ContextProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={FreshFlowRouter} />
      </HelmetProvider>
    </ContextProvider>
  </StrictMode>,
)
