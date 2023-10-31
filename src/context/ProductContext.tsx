import { ReactNode, createContext, useState } from "react";
import { ProductList, products } from "../data/Products";

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
  cartProducts: ProductType[]
  addProducts: (product: ProductList) => void
  RemoveProduct: (product: ProductList) => void;
  items: ProductList[]
}

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: ProductProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  function addProducts(product: ProductList) {
    const isProductAdded = cartProducts.findIndex((cartProduct) => cartProduct.id === product.id);

    if(isProductAdded > 0) {
      cartProducts[isProductAdded].quantity = cartProducts[isProductAdded].quantity + product.quantity
    } else {
      setCartProducts((state) => [...state, product])
    }
  }

  function RemoveProduct(product: ProductList) {
    setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id));
  }

  const items = products;

  return (
    <ProductContext.Provider value={{
      cartProducts,
      addProducts,
      RemoveProduct,
      items
      }}>
      {children}
    </ProductContext.Provider>
  )
}