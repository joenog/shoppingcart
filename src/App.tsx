import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../routes";

import { Toaster } from "react-hot-toast";
import CartProvider from "./context/CartContex";

function App() {
  return (
    <React.StrictMode>
      <CartProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;
