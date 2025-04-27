import { createContext, ReactNode, useState } from "react";
import { ProductsProps } from "../types/productsProps";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number
  addItemCart: (newItem: ProductsProps) => void;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
};

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({children}: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemCart(newItem: ProductsProps) {
    //add to cart 
    const indexItem = cart.findIndex(item => item.id === newItem.id) //if notfound return -1

    if (indexItem !== -1) {
      // se entrar aqui apenas acionamos 1 na quantidas e somamos o total do carrinho
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount +1;
      cartList[indexItem].total = cartList[indexItem].total + cartList[indexItem].price;
      setCart(cartList);
      return;
    }

    //adicionar item a nossa lista
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data])
  }

  return(
    <CartContext.Provider 
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart
      }}>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;