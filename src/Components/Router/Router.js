import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddService/AddServices";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import MyServices from "../Pages/MyServices/MyServices";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import ServicesDetalis from "../Shared/ServicesDetails/ServicesDetalis";
import PrivateRoute from "./PrivateRoute";

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
        loader: () =>
          fetch("https://travel-poient-holiday-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://travel-poient-holiday-server.vercel.app/services/${params.id}`
          ),
        element: <ServicesDetalis />,
      },

      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-review",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
