import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import MainlayoutRoutes from './routing/Routes/MainlayoutRoutes'
import StoreContextProvider from './context/StoreContext'


const router = createBrowserRouter(
   [...MainlayoutRoutes]
)

createRoot(document.getElementById('root')).render(
   
   <StrictMode>
      <StoreContextProvider>
         <RouterProvider router={router}/>
      </StoreContextProvider>
      
   </StrictMode>
   
   
  
  
 
)
