import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from '../pages/Homepage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  
  </StrictMode>,
)
