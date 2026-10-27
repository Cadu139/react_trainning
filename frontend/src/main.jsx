import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Welcome from './routes/Welcome.jsx'
import MyAccount from './routes/MyAccount.jsx'
import Discover from './routes/Discover.jsx'
import HowToUse from './routes/HowToUse.jsx'

import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />
      },
      {
        path: "/my_account",
        element: <MyAccount />
      },
      {
        path: "/discover",
        element: <Discover />
      },
      {
        path: "/how_to_use",
        element: <HowToUse />
      }
    ]
  }
], { basename: import.meta.env.BASE_URL })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
