import { CheckoutCartContainer, HeaderContainer, LocationContainer } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react"
import logo from "../../assets/logo-coffee-delivery.svg"
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div className="right-side">
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <p>São Paulo, SP</p>
        </LocationContainer>
        <CheckoutCartContainer>
          <ShoppingCart weight="fill" size={22} />
          <span>0</span>
        </CheckoutCartContainer>
      </div>
    </HeaderContainer>
  )
}