import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";
import { realPrice } from "../../utils/realPrice";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, handleCleanCart, total } =
    useContext(CartContext);

  return (
    <section className="w-full max-w-5xl mx-auto pt-20">
      {cart.length === 0 && (
        <div className="flex w-full flex-col justify-center items-center">
          <p className="text-3xl mt-40 text-gray-600">ops, carrinho vazio...</p>
          <Link
            className="p-1 px-4 mt-10 bg-green-600 rounded-md text-amber-50"
            to={"/"}
          >
            Ir às compras
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between shadow-sm shadow-gray-300 bg-white rounded-2xl px-4 mx-2"
        >
          <img
            className="w-28 rounded-2xl p-4"
            src={item.cover}
            alt={item.title}
          />

          <span>
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <div className="flex justify-center items-center gap-2 mx-2">
            <button
              onClick={() => removeItemCart(item)}
              className="flex items-center justify-center bg-gray-600 px-2.5 rounded-md text-white font-bold"
            >
              -
            </button>
            {item.amount}
            <button
              onClick={() => addItemCart(item)}
              className="flex items-center justify-center bg-gray-600 px-2 rounded-md text-white font-bold"
            >
              +
            </button>
          </div>
          <span className="float-right">Total: {realPrice(item.total)}</span>
        </section>
      ))}

      {cart.length != 0 && (
        <p className="flex justify-end font-bold mt-4 mr-3">{total}</p>
      )}

      {cart.length > 0 && (
        <span className="flex w-full justify-center items-center">
          <button
            onClick={() => handleCleanCart()}
            className="bg-gray-600 hover:bg-gray-700 rounded-md py-1 px-3 my-4 text-amber-50"
          >
            Limpar carrinho
          </button>
        </span>
      )}
    </section>
  );
}
