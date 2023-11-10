import { CheckoutCartContainer, HeaderContainer, LocationContainer } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react"
import logo from "../../assets/logo-coffee-delivery.svg"
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export function Header() {
  const { cartProducts } = useContext(ProductContext)
  const [hideSpan, setHideSpan] = useState(true);

  const numberOfItems = cartProducts.length;

  useEffect(() => {
    if(numberOfItems > 0) {
      setHideSpan(false)
    } else {
      setHideSpan(true)
    }
  }, [numberOfItems]);

  return (
    <HeaderContainer>
      <NavLink to="/coffee-delivery">
        <img src={logo} alt="" />
      </NavLink>
      <div className="right-side">
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <p>São Paulo, SP</p>
        </LocationContainer>
        <CheckoutCartContainer to="/coffee-delivery/checkout">
          <ShoppingCart weight="fill" size={22} />
          <span className={hideSpan ? 'hide' : ''}>{numberOfItems}</span>
        </CheckoutCartContainer>
      </div>
    </HeaderContainer>
  )
}