import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { ProductsProps } from "../../types/productsProps";
import { FaCartShopping } from "react-icons/fa6";

export default function Home() {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data)
    }
    getProducts();
  }, []);

  return (
    <div>
      <main className="flex justify-center flex-col w-full max-w-5xl mx-auto mb-17">
        <h1 className=" text-xl my-5 text-center">Produtos em alta</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 rounded-xl gap-4">

          {products.map((product)=> (
            <section className="flex flex-col bg-white rounded-2xl p-4" key={product.id}>
              <div className="mb-3">
                <img src={product.cover} alt=""></img>
                {product.title}
              </div>
              <div className="flex h-full font-bold justify-between items-end">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}

                <button className="bg-green-400 px-4 p-1 rounded-md">
                  <FaCartShopping size={15} />
                </button>
              </div>
            </section>
          ))}

        </div>
      </main>
    </div>
  );
}
