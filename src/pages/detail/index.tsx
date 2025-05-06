import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsProps } from "../../types/productsProps";
import { api } from "../../services/api";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { realPrice } from "../../utils/realPrice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductsProps>();
  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`products/${id}`);
      setProduct(response.data);
    }

    getProduct();
  }, [id]);

  return (
    <main className="flex justify-center flex-col w-full max-w-5xl mx-auto mb-17 pt-24">
      {product && (
        <section className="w-full my-4">
          <div className="flex flex-col lg:flex-row">
            <img
              className="flex-1 max-h-72 object-contain rounded-xl"
              src={product?.cover}
              alt={product?.title}
            />

            <div className="flex flex-col flex-1 mx-4">
              <p className="text-xl font-bold">{product?.title}</p>
              <p className="py-4">{product?.description}</p>
              <strong className="self-start text-xl">{realPrice(product.price)}</strong>
              <Link className="self-end" to={"/cart"}>
                <button
                  onClick={() => addItemCart(product)}
                  className="p-1 self-end px-8 bg-green-500 hover:bg-green-400 rounded-md"
                  >
                  <FaCartShopping size={20} />
                </button>
              </Link>
            </div>
          </div>

        </section>
      )}
    </main>
  );
}
