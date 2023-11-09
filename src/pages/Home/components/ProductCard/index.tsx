import { ShoppingCart } from "phosphor-react";
import { AddToCartContainer, ProductCardContainer } from "./styles";
import { InputNumber } from "../../../../components/InputNumber";
import { ProductList } from "../../../../data/Products";
import { useContext, useState } from "react";
import { ProductContext } from "../../../../context/ProductContext";

interface ProductCardProps {
  product: ProductList
}


export function ProductCard({ product }: ProductCardProps) {
  const { addProducts } = useContext(ProductContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddProducts() {
    const productToAdd = {
      ...product,
      quantity
    }

    addProducts(productToAdd)
  }

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if(quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <ProductCardContainer>
      <img src={product.image} alt="" />
      <div className="tags">
        {product.tags &&
        product.tags.map((tag) => {
          return (
            <span
              key={product.tags.indexOf(tag)}
            >
              {tag}
            </span>
          )
        })}
      </div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <AddToCartContainer>
        <section className="price">
          <p>R$ <span>{product.price}</span></p>
        </section>
        <section className="quantity-cart">
          <InputNumber
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <div className="cart" onClick={handleAddProducts}>
            <ShoppingCart weight="fill" />
          </div>
        </section>
      </AddToCartContainer>
    </ProductCardContainer>
  )
}