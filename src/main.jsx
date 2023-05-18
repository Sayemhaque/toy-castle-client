import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Routes'
import { RouterProvider } from "react-router-dom"
import FirebaseAuthProvider from './Provider/FirebaseAuthProvider'
// import FirebaseAuthProvider from './Provider/FirebaseAuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirebaseAuthProvider>
   <RouterProvider router={router} />
   </FirebaseAuthProvider>
    
 
  </React.StrictMode>,
)
