import { BannerTop } from "./components/BannerTop";
import { HomeContainer, MenuContainer } from "./styles";
import { ProductCard } from "./components/ProductCard";

import { products } from "../../data/Products";

export function Home() {
  return (
    <HomeContainer>
      <BannerTop />
      <MenuContainer>
        <h1>Nossos cafés</h1>
        <div className="menu">
          {
            products.map((product) => {
              return (
              <ProductCard
                key={product.id}
                title={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                tags={product.tags}
              />)
            })
          }
        </div>
      </MenuContainer>
    </HomeContainer>
  )
}