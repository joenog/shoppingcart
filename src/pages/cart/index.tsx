import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";
import { realPrice } from "../../utils/realPrice";

export default function Cart() {

  const { cart } = useContext(CartContext);

  return (
    <div>
      <main className="w-full max-w-5xl mx-auto">

          { cart.length === 0 && (
            <div className="flex w-full flex-col justify-center items-center mt-40">
              <p className="text-3xl my-4 text-gray-600">
                ops, carrinho vazio...
              </p>
              <Link className="p-1 px-4 bg-green-600 rounded-xl text-amber-50" to={"/"}>Ir às compras</Link>
            </div>
          )}

          {cart.map((item) => (
            <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300 bg-white rounded-2xl px-4">
              <img
                className="w-28 rounded-2xl p-4"
                src={item.cover}
                alt={item.title}
              />
    
              <span>{item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}</span>
    
              <div className="flex justify-center items-center gap-2 mx-2">
                <button className="flex items-center justify-center bg-gray-600 px-2.5 rounded-md text-white font-bold">
                  -
                </button>
                  {item.amount}
                <button className="flex items-center justify-center bg-gray-600 px-2 rounded-md text-white font-bold">
                  +
                </button>
              </div>
              <span className="float-right">Total: {realPrice(item.price)}</span>

            </section>
          ))}

        {cart.length != 0 && (<p className="font-bold mt-4 ml-3">{"soma dos produtos" }</p>)}
      </main>
    </div>
  );
}
