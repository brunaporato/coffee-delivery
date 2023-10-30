import { ShoppingCart } from "phosphor-react";
import { AddToCartContainer, ProductCardContainer } from "./styles";
import { InputNumber } from "../../../../components/InputNumber";
import { useState } from "react";

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
          <InputNumber />
          <div className="cart">
            <ShoppingCart weight="fill" />
          </div>
        </section>
      </AddToCartContainer>
    </ProductCardContainer>
  )
}