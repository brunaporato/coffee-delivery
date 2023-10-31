import Espresso from "../assets/products-image/Type=Espresso.png";
import Americano from "../assets/products-image/Type=Americano.png";
import Arabe from "../assets/products-image/Type=Árabe.png";
import CafeComLeite from "../assets/products-image/Type=Café com Leite.png";
import CafeGelado from "../assets/products-image/Type=Café Gelado.png";
import Capuccino from "../assets/products-image/Type=Capuccino.png";
import ChocolateQuente from "../assets/products-image/Type=Chocolate Quente.png";
import Havaiano from "../assets/products-image/Type=Havaiano.png";
import Irlandes from "../assets/products-image/Type=Irlandês.png";
import Macchiato from "../assets/products-image/Type=Macchiato.png";
import Mochaccino from "../assets/products-image/Type=Mochaccino.png";
import Cubano from "../assets/products-image/Type=Cubano.png";
import ExpressoCremoso from "../assets/products-image/Type=Expresso Cremoso.png";
import Latte from "../assets/products-image/Type=Latte.png";

export interface ProductType {
  id: number
  name: string
  description: string
  image: string
  price: string
  tags: string[]
}

export const products: ProductType[] = [
  {
    id: (Math.random() * 100),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: Espresso,
    price: "9,90",
    tags: ["tradicional"]
  },
  {
    id: (Math.random() * 100),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: Americano,
    price: "9,90",
    tags: ["tradicional"]
  },
  {
    id: (Math.random() * 100),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: ExpressoCremoso,
    price: "9,90",
    tags: ["tradicional"]
  },
  {
    id: (Math.random() * 100),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: CafeGelado,
    price: "9,90",
    tags: ["tradicional", "gelado"]
  },
  {
    id: (Math.random() * 100),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: CafeComLeite,
    price: "9,90",
    tags: ["tradicional", "com leite"]
  },
  {
    id: (Math.random() * 100),
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: Latte,
    price: "9,90",
    tags: ["tradicional", "com leite"]
  },
  {
    id: (Math.random() * 100),
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: Capuccino,
    price: "9,90",
    tags: ["tradicional", "com leite"]
  },
  {
    id: (Math.random() * 100),
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: Macchiato,
    price: "9,90",
    tags: ["tradicional", "com leite"]
  },
  {
    id: (Math.random() * 100),
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: Mochaccino,
    price: "9,90",
    tags: ["tradicional", "com leite"]
  },
  {
    id: (Math.random() * 100),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: ChocolateQuente,
    price: "9,90",
    tags: ["tradicional", "com leite"]
  },
  {
    id: (Math.random() * 100),
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: Cubano,
    price: "9,90",
    tags: ["especial", "alcoólico", "gelado"]
  },
  {
    id: (Math.random() * 100),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: Havaiano,
    price: "9,90",
    tags: ["especial"]
  },
  {
    id: (Math.random() * 100),
    name: 'Arabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: Arabe,
    price: "9,90",
    tags: ["especial"]
  },
  {
    id: (Math.random() * 100),
    name: 'Irlandes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: Irlandes,
    price: "9,90",
    tags: ["especial", "alcoólico"]
  },
  
]