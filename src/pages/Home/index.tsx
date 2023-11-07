import { BannerTop } from "./components/BannerTop";
import { HomeContainer, MenuContainer } from "./styles";
import { ProductCard } from "./components/ProductCard";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export function Home() {
  const { items } = useContext(ProductContext)
  return (
    <HomeContainer>
      <BannerTop />
      <MenuContainer>
        <h1>Nossos cafés</h1>
        <div className="menu">
          {
            items.map((item) => {
              return (
              <ProductCard
                key={item.id}
                product={item}
              />
              )
            })
          }
        </div>
      </MenuContainer>
    </HomeContainer>
  )
}