import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-center bg-neutral-900 h-16 rounded-xl m-2 text-amber-50">

      <nav className="flex w-full max-w-7xl pr-4 items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold pl-4"><span className="text-green-300">super</span>CART</h1>
        </Link>
          <Link to={"/cart"}>
            {" "}
            <FaCartShopping size={20}/>{" "}
            <span className="absolute bg-red-500 px-1 rounded-2xl text-xs">
              {'3'}
            </span>
          </Link>
      </nav>
    </header>
  );
}
