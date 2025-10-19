import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Latouts/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Career';
import AuthProvider from './Pages/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Private from './Pages/Private';
import Details from './Pages/Details';

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
     
      {
         index:true,
         Component:Home,
      },
       {
         path:'/about',
         Component:About,
      },
       {
           path:'/career',
         Component:Career,
      },
      {
           path:'/login',
         Component:Login,
      },
       {
           path:'/register',
         Component: Register,
      },
      {
           path:'/details/:id',
           element:<Private>
            <Details></Details>
           </Private>
      }



    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
