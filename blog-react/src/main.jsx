import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// importing home pages
import Home from './pages/Home.jsx';
// import all the pages which we used for routing
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import SingleBlog from './components/SingleBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <App/>,
    // adding the children
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/blogs",
        element: <Blogs/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      // single blogs path
      {
        path: "/blogs/:id",
        element: <SingleBlog/>,
        // here to load and get the specific url path for the id's of the blogs
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
