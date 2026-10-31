import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './routes/Home.jsx'
import Detail from './routes/Detail.jsx'
import Profile from './routes/Profile.jsx'
import NotFound from './routes/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,                
    errorElement: <NotFound />,      
    children: [
      { index: true, element: <Home /> },       
      { path: 'detail', element: <Detail /> },
      { path: 'profile', element: <Profile /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)