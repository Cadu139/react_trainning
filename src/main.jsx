import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Welcome from './routes/Welcome.jsx'

import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />
      }
    ]
  }
], { basename: import.meta.env.BASE_URL })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
