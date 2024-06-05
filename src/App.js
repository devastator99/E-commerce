import React from 'react';
import logo from './logo.svg';
import { Cart } from './features/Cart/Cart';
import './App.css';
import { ProductList } from './features/Product/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Switch , createBrowserRouter , RouterProvider } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/signup",
    element: ( <SignupPage></SignupPage>) ,
  },
  {
    path: "/login",
    element : (<LoginPage></LoginPage>) ,
  },
  {
    path:"/cart",
    element : (<CartPage></CartPage>)
  },
  {
    path:"/checkout",
    element : (<CheckoutPage></CheckoutPage>)
  },
  {
    path:"/details",
    element : (<ProductDetailPage></ProductDetailPage>)
  }
]);


function App() {
  return (  
    <div className='App'>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
