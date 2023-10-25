/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import Login from './Components/login/Login.jsx';
import Registration from './Components/registration/Registration.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import BrandProducts from './Components/Pages/BrandProducts/BrandProducts.jsx';
import Details from './Components/Details/Details.jsx';
import Update from './Components/Update/Update.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Cart from './Components/Cart/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: 'addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/:name',
        element: <BrandProducts></BrandProducts>,
        loader: ({params}) => fetch(`https://y-psi-liart.vercel.app/products/${params.name}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://y-psi-liart.vercel.app/productsId/${params.id}`)
      }, 
      {
        path: '/addCart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch(`https://y-psi-liart.vercel.app/details`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`https://y-psi-liart.vercel.app/productsId/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
