import { ShoppingCart } from "phosphor-react";
import { AddToCartContainer, ProductCardContainer } from "./styles";
import { InputNumber } from "../../../../components/InputNumber";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
  tags?: string[];
}

export function ProductCard({title, image, description, price, tags}: ProductCardProps) {
  return (
    <ProductCardContainer>
      <img src={image} alt="" />
      <div className="tags">
        {tags &&
        tags.map((tag) => {
          return (
            <span
              key={tags.indexOf(tag)}
            >
              {tag}
            </span>
          )
        })}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <AddToCartContainer>
        <section className="price">
          <p>R$ <span>{price}</span></p>
        </section>
        <section className="quantity-cart">
          <InputNumber />
          <div className="cart">
            <ShoppingCart weight="fill" />
          </div>
        </section>
      </AddToCartContainer>
    </ProductCardContainer>
  )
}