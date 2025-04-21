import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import Cart from "./src/pages/cart";
import Home from "./src/pages/home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
