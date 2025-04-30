import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContex";

export function Header() {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="flex fixed w-screen justify-center bg-neutral-900/95 h-16 text-amber-50">
      <nav className="flex w-full max-w-7xl pr-4 items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold pl-4">
            <span className="text-green-300">super</span>CART
          </h1>
        </Link>
        <Link to={"/cart"}>
          {" "}
          <FaCartShopping size={20} />{" "}
          {cartAmount > 0 && (
            <span className="absolute bg-red-500 px-1 rounded-2xl text-xs">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
