import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import Error from './components/Error.jsx'
import Browsebooks from './components/pages/Browsebooks.jsx'
import AddBook from './components/pages/AddBook.jsx'
import BookDetails from './components/pages/BookDetails.jsx'
import Home from './components/pages/Home.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      
      {
        path:'/browsebooks',
        element:<Browsebooks />
      },
      {
        path:'/bookdetails/:id',
        element:<BookDetails />
      },
      {
        path:'/addbooks',
        element:<AddBook />
      },
      
    ],
    errorElement:<Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
