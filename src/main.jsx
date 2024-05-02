import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Main from './Components/Main/Main.jsx';
import Contact from './Components/Contact/Contact.jsx';
import PagesToRead from './Components/PageToRead/PagesToRead.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import { Toaster } from 'react-hot-toast';
import About from './Components/About/About.jsx';
import ReadBooks from './Components/ReadBooks/ReadBooks.jsx';
import WishlistBooks from './Components/WishListBooks/WishListBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/", 
        element: <Home></Home>,
        loader: ()=> fetch('https://morshedsiam03.github.io/A-8_API-/book.json'),
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {           
            index: true,
            element: <ReadBooks></ReadBooks>,
           },
           {
            path: "wishlists",
            element: <WishlistBooks></WishlistBooks>,
          },
          ]                       
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('https://morshedsiam03.github.io/A-8_API-/book.json')
      },
      
    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
