import { useContext } from "react";
import { InputNumber } from "../../../../components/InputNumber";
import { ProductList } from "../../../../data/Products";
import { CartItemContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";
import { ProductContext } from "../../../../context/ProductContext";

interface CartItemProps {
  product: ProductList
}

export function CartItem({ product }: CartItemProps) {
  const { RemoveProduct } = useContext(ProductContext)

  const price = parseFloat(product.price.replace(",", ".")) * product.quantity
  const formattedPrice = price.toFixed(2).replace(".", ",");

  function handleRemoveProduct()  {
    RemoveProduct(product)
  }

  return (
    <CartItemContainer>
      <div className="image-info">
        <img src={product.image} alt="" />
        <div className="info">
          <p>{product.name}</p>
          <div className="quantity-remove">
            <InputNumber />
            <RemoveButton onClick={handleRemoveProduct}>
              <Trash size={16} className="icon" />
              remover
            </RemoveButton>
          </div>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CartItemContainer>
  )
}