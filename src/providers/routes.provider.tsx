import Home from "@/pages";
import Todo from "@/pages/[todoId]";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import AppProvider from "@/providers/index.provider";
import { FC } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppProvider />,
    children: [
      {
        path: "/todos",
        element: <Home />,
        children: [
          { path: ":todoId", element: <Todo /> }
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path : "*", 
        element : <Navigate to="/todos"/>
      }
    ],
  },
]);

const Routes: FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
