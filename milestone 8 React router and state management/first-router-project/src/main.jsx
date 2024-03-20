import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Forms from "./components/form/Form.jsx";
import Users from "./components/Users/Users.jsx";
import Details from "./userDetails/Details.jsx";
import Posts from "./components/posts/posts.jsx";
import PostDetails from "./components/postDetails/PostDetails.jsx";
import Errorpage from "./components/errorPage/Errorpage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "header",
        element: <Header></Header>,
      },
      {
        path: "form",
        element: <Forms></Forms>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Details></Details>,
      },
      {
        path : "/posts",
        loader : () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element : <Posts></Posts>
      },
      {
        path : "/post/:postID",
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element : <PostDetails></PostDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);
