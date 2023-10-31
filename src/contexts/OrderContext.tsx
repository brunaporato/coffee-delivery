import { createContext } from "react";
import { ProductType, products } from "../data/Products";

//TODO: Repensar contexto e reducer // preciso acessar
//quantidade e itens na página home e enviar para a página checkout
//tb preciso enviar os dados de endereço da página checkout para a success


interface OrderContextType {
  quantity: number;
  data: ProductType[];
}

export const OrderContext = createContext({} as OrderContextType)