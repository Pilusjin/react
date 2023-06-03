import React from 'react'
import ReactDOM from 'react-dom/client'

import './body.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Layout } from './components/Layout';
import { ProductPage } from './pages/ProductPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage';

const router = createBrowserRouter([
  {
      path: "/",
      element: <ProductPage/>,
  },
  {
      path: "/product/id",
      element: <ProductPage />,
  },
  {
      path: "/contact",
      element: <ContactPage />,
  },
  {
      path: "/checkout",
      element: <CheckoutPage />,
  },
  {
      path: "/checkout/success",
      element: <CheckoutSuccessPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
