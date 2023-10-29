import { InputNumber } from "../../../../components/InputNumber";
import { CartItemContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";

interface CartItemProps {
  title: string;
  quantity: number;
  image: string;
  itemPrice: string;
}

export function CartItem({ title, quantity, image, itemPrice }: CartItemProps) {
  const price = parseFloat(itemPrice.replace(",", ".")) * quantity
  const formattedPrice = price.toFixed(2).replace(".", ",");

  return (
    <CartItemContainer>
      <div className="image-info">
        <img src={image} alt="" />
        <div className="info">
          <p>{title}</p>
          <div className="quantity-remove">
            <InputNumber quantity={quantity} />
            <RemoveButton>
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