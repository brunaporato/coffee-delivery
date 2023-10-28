import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  flex-shrink: 0;

  width: 25.6rem;
  padding: 11.2rem 2rem 2rem;

  position: relative;

  display: flex;
  flex-direction: column;

  transition: all .4s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    position: absolute;
    top: -2rem;
    left: 6.8rem;
  }

  > span {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};

    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 100px;

    padding: .4rem .8rem;
    margin: 0 auto;
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 130%;
    text-align: center;

    margin-top: 1.6rem;
  }

  > p {
    color: ${(props) => props.theme["base-label"]};
    text-align: center;

    font-size: 1.4rem;
    line-height: 130%;

    margin: .8rem 0 3.3rem;
  }
`

export const AddToCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .price {
    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1.4rem;
      line-height: 130%;
    }

    span {
      color: ${(props) => props.theme["base-text"]};
      background: none;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 130%;
    }
  }

  .quantity-cart {
    display: flex;
    gap: .8rem;

    .cart {
      background: ${(props) => props.theme["purple-dark"]};
      color: ${(props) => props.theme["base-card"]};

      display: flex;
      align-items: center;
      justify-content: center;

      padding: .8rem;
      border-radius: 6px;

      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`