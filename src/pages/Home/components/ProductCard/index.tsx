import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { AddToCartContainer, ProductCardContainer } from "./styles";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

export function ProductCard({title, image, description, price}: ProductCardProps) {
  return (
    <ProductCardContainer>
      <img src={image} alt="" />
      <span>tradicional</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <AddToCartContainer>
        <section className="price">
          <p>R$ <span>{price}</span></p>
        </section>
        <section className="quantity-cart">
          <div className="quantity">
            <button><Minus size={14} /></button>
            <span>0</span>
            <button><Plus size={14} /></button>
          </div>
          <div className="cart">
            <ShoppingCart weight="fill" />
          </div>
        </section>
      </AddToCartContainer>
    </ProductCardContainer>
  )
}