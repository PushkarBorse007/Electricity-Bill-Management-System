import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

const Index = lazy(() => import("./components/MainApp"));
const SignUp = lazy(() => import("./components/SignUp"));
const LogIn = lazy(() => import("./components/Login"));
const About = lazy(() => import("./components/About"));

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <h2>Error</h2>,
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        errorElement: <h2>Error</h2>,
        element: <Index />,
      },
      {
        path: "/about",
        errorElement: <h2>Error</h2>,
        element: <About />,
      },
    ],
  },
  
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

export default routes;
