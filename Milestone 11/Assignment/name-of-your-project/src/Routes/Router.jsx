import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Errorpage from "../component/Errorpage";
import Home from "../Page/Home/Home";
import Allassignment from "../Page/Allassignment/Allassignment";
import Createassignment from "../Page/Createassignment/Createassignment";
import Mysubmitted from "../Page/Mysubmitted/Mysubmitted";
import Pendingassignments from "../Page/Pendingassignments/Pendingassignments";
import Login from "../Page/Authentication/Login";
import Registe from "../Page/Authentication/Registe";
import Assignmentdetails from "../Page/Allassignment/Assignmentdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allassignment",
        element: <Allassignment></Allassignment>,
      },
      {
        path: "/createassinment",
        element: <Createassignment></Createassignment>,
      },
      {
        path: "/mysubmitted",
        element: <Mysubmitted></Mysubmitted>,
      },
      {
        path: "/pending",
        element: <Pendingassignments></Pendingassignments>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registe></Registe>,
      },
      {
        path: "/assignmentdetails/:id",
        element: <Assignmentdetails></Assignmentdetails>,
      },
    ],
  },
]);
export default router;
