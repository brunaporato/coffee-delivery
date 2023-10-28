import { BannerTop } from "./components/BannerTop";
import { HomeContainer, MenuContainer } from "./styles";
import coffee from "../../assets/Coffee.png"
import { ProductCard } from "./components/ProductCard";

const products = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: coffee,
    price: "9,90"
  },
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: coffee,
    price: "9,90"
  },
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: coffee,
    price: "9,90"
  },
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: coffee,
    price: "9,90"
  },
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: coffee,
    price: "9,90"
  },
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: coffee,
    price: "9,90"
  },
  
]

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
                title={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
              />)
            })
          }
        </div>
      </MenuContainer>
    </HomeContainer>
    
  )
}