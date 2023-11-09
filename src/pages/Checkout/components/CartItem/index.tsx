import { Trash } from "phosphor-react";
import { CartItemContainer, RemoveButton } from "./styles";
import { InputNumber } from "../../../../components/InputNumber";
import { ProductList } from "../../../../data/Products";
import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext";

interface CartItemProps {
  product: ProductList;
}

export function CartItem({ product }: CartItemProps) {
  const { RemoveProduct, changeCartProductQuantity } = useContext(ProductContext);

  const price = parseFloat(product.price.replace(",", ".")) * product.quantity;
  const formattedPrice = price.toFixed(2).replace(".", ",");

  function handleRemoveProduct() {
    RemoveProduct(product);
  }

  function handleIncrease() {
    changeCartProductQuantity(product.id, 'increase')
  }

  function handleDecrease() {
    if(product.quantity > 1) {
      changeCartProductQuantity(product.id, 'decrease')
    } else {
      const wantToRemoveProduct = confirm("Tem certeza que deseja excluir o produto?")
      wantToRemoveProduct ? handleRemoveProduct() : ""
    }
  }


  return (
    <CartItemContainer>
      <div className="image-info">
        <img src={product.image} alt="" />
        <div className="info">
          <p>{product.name}</p>
          <div className="quantity-remove">
            <InputNumber
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={product.quantity}
            />
            <RemoveButton onClick={handleRemoveProduct}>
              <Trash size={16} className="icon" />
              remover
            </RemoveButton>
          </div>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CartItemContainer>
  );
}