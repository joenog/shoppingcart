import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../routes";
import CartProvider from "./context/CardContex";

function App() {
  return (
    <React.StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;
