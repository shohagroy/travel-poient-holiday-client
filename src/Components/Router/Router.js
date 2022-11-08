import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddService/AddServices";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      { path: "/add-service", element: <AddServices /> },
      { path: "/my-review", element: <MyReview /> },
    ],
  },
]);
