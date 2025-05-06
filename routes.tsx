import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import Cart from "./src/pages/cart";
import Home from "./src/pages/home";
import ProductDetail from "./src/pages/detail";

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
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
