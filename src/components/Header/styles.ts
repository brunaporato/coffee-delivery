import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 3.2rem 16rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .hide {
    display: none;
  }

  @media (max-width: 980px) {
    padding: 3.2rem 3rem;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  padding: .8rem;
  justify-content: center;
  align-items: center;
  gap: .4rem;

  border-radius: 6px;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme.purple};

  p {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 1.4rem;
    line-height: 130%;
  }
`

export const CheckoutCartContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: .8rem;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};

  color: ${(props) => props.theme["yellow-dark"]};

  cursor: pointer;

  position: relative;

  span {
    position: absolute;
    
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    top: -.8rem;
    right: -.83rem;
  }
`