import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error.jsx'
import Browsebooks from './pages/Browsebooks.jsx'
import AddBook from './pages/AddBook.jsx'
import BookDetails from './pages/BookDetails.jsx'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux';
import store from './redux/store.js'

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
        path:'/browsebooks/:category',
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
    <Provider store={store}>
      <RouterProvider router={appRouter}  />
    </Provider>
  </StrictMode>,
)
