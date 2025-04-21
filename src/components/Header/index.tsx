import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex bg-gray-600 h-16 rounded-2xl m-2 text-amber-50">

      <nav className="flex w-full pr-4 gap-4 items-center justify-between">
        <h1 className="text-2xl font-bold pl-4">superCART</h1>
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
