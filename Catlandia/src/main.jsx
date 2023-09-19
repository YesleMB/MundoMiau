import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import main from "./main.css?inline"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './componentes/Routes/home.jsx'
import Galeria from "./componentes/Routes/galeria.jsx"

const Router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  children: [
    {
      path:"/galeria",
      element:<Galeria/>,  
     },
     {
      path:"/",
      element:<Home/>,   
     },
    
  ],

 },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
