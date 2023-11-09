import { ReactNode, createContext, useState } from "react";
import { ProductList, products } from "../data/Products";
import { produce } from "immer";

export interface ProductType {
  id: number
  name: string;
  image: string;
  description: string;
  price: string;
  tags: string[];
  quantity: number;
}

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextProps {
  items: ProductList[]
  cartProducts: ProductType[]
  addProducts: (product: ProductList) => void
  RemoveProduct: (product: ProductList) => void
  changeCartProductQuantity: (productId: number, type: 'increase' | 'decrease') => void
}

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: ProductProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  function addProducts(product: ProductList) {
    const isProductAdded = cartProducts.findIndex((cartProduct) => cartProduct.id === product.id);

    const newCart = produce(cartProducts, (draft) => {
      if (isProductAdded < 0) {
        draft.push(product)
      } else {
        draft[isProductAdded].quantity += product.quantity
      }
    })

    setCartProducts(newCart)
  }

  function changeCartProductQuantity(
    productId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartProducts, (draft) => {
      const coffeeExistsInCart = cartProducts.findIndex(
        (cartProduct) => cartProduct.id === productId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        item.quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartProducts(newCart)
  }

  function RemoveProduct(product: ProductList) {
    setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id));
  }


  const items = products;

  return (
    <ProductContext.Provider value={{
      items,
      cartProducts,
      addProducts,
      RemoveProduct,
      changeCartProductQuantity,
      }}>
      {children}
    </ProductContext.Provider>
  )
}