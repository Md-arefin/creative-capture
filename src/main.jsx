import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
