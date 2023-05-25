import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import HomeBody from './components/HomeBody/HomeBody';
import AllToys from './components/AllToys/AllToys';
import AddAToy from './components/AddAToy/AddAToy';
import ViewToyDetails from './components/ViewToyDetails/ViewToyDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyToys from './components/MyToys/MyToys';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateMyToys from './components/UpdateMyToys/UpdateMyToys';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeBody></HomeBody>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "addatoy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: "viewdetails/:id",
        element: <PrivateRoute><ViewToyDetails></ViewToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-peach.vercel.app/singletoy/${params.id}`)
      },
      {
        path: "mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "updatemytoy/:id",
        element: <UpdateMyToys></UpdateMyToys>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-peach.vercel.app/singletoy/${params.id}`)
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
