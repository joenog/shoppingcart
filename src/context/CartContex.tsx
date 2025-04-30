import { createContext, ReactNode, useState } from "react";
import { ProductsProps } from "../types/productsProps";
import { realPrice } from "../utils/realPrice";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
  removeItemCart: (product: CartProps) => void;
  handleCleanCart: () => void;
  total: string;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductsProps) {
    //add to cart
    const indexItem = cart.findIndex((item) => item.id === newItem.id); //if notfound return -1

    if (indexItem !== -1) {
      // se entrar aqui apenas acionamos 1 na quantidas e somamos o total do carrinho
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].total + cartList[indexItem].price;
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    //adicionar item a nossa lista
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    // Atualizando o estado do carrinho e calculando o total usando o novo estado
    setCart((products) => {
      const updatedCart = [...products, data];
      totalResultCart(updatedCart); // Chama a função com o estado atualizado
      return updatedCart;
    });
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (indexItem >= 0) {
      const cartList = [...cart];

      if (cartList[indexItem].amount > 1) {
        cartList[indexItem].amount -= 1;
        cartList[indexItem].total -= cartList[indexItem].price;

        setCart(cartList);
        totalResultCart(cartList);
      } else {
        const removeItem = cartList.filter((item) => item.id !== product.id);

        setCart(removeItem);
        totalResultCart(removeItem);
      }
    }
  }

  function totalResultCart(itens: CartProps[]) {
    const myCart = itens;
    const result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    setTotal(realPrice(result));
  }

  //clean cart
  function handleCleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        handleCleanCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
