import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import ClassicBooks from './components/classicBooks/ClassicBooks.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import AdventureBooks from './components/AdventureBooks/AdventureBooks.jsx';
import ScienceFiction from './components/scienceFiction/ScienceFiction.jsx';
import Carts from './components/Carts/Carts.jsx';
import { BookProvider } from './context/BooksContext.jsx';
import PhilosophyBooks from './components/Philosophy/PhilosophyBooks.jsx';
import ChildrenBooks from './components/ChildrenBooks/ChildrenBooks.jsx';
import SearchedItem from './components/searchedItem/SearchedItem.jsx';
import Signup from './components/Singup.jsx';
import Login from './components/Login.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'classicBooks',
        element: <ClassicBooks />
      },
      {
        path: 'productDetail',
        element: <ProductDetail />
      },
      {
        path: 'advantureBooks',
        element: <AdventureBooks />
      },
      {
        path: 'scienceFiction',
        element: <ScienceFiction />
      },
      {
        path: 'carts',
        element: <Carts />
      },
      {
        path: 'philosophy',
        element: <PhilosophyBooks />
      },
      {
        path: 'children',
        element: <ChildrenBooks />
      },
      {
        path: 'searchedItem',
        element: <SearchedItem />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BookProvider>
    <RouterProvider router={router} />
  </BookProvider>,
)
