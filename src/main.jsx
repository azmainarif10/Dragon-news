import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Latouts/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Career';

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
      }


    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
