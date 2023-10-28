import { BannerTopContainer } from "./styles";
import bannerImg from "../../../../assets/banner-img.png";
import { BannerItems } from "../BannerItems";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function BannerTop () {
  return (
    <BannerTopContainer>
      <div className="text">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <div className="items">
          <BannerItems
            text='Compra simples e segura'
            icon={<ShoppingCart weight="fill" />}
            color="yellow-dark"
          />
          <BannerItems
            text='Embalagem mantém o café intacto'
            icon={<Package weight="fill" />}
            color="base-text"
          />
          <BannerItems
            text='Entrega rápida e rastreadaa'
            icon={<Timer weight="fill" />}
            color="yellow"
          />
          <BannerItems
            text='O café chega fresquinho até você'
            icon={<Coffee weight="fill" />}
            color="purple"
          />
        </div>
      </div>
      <img src={bannerImg} alt="" />
    </BannerTopContainer>
  )
}