import React from 'react';
import logo from './logo.svg';
import { Cart } from './features/Cart/Cart';
import './App.css';
import { ProductList } from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Switch , createBrowserRouter , RouterProvider } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

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
