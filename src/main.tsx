import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { Slideshow } from './components/Slideshow'
import { QuoteList } from './components/QuoteList'

registerSW({ immediate: true })

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'slideshow',
        element: <Slideshow />
      },
      {
        path: 'list',
        element: <QuoteList />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
