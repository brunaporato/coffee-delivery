import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  padding: .8rem .4rem 3.2rem;
  margin-bottom: 2.4rem;
  justify-content: space-between;
  align-self: stretch;

  background-color: ${(props) => props.theme["base-card"]};

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  > p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 130%;
  }

  .image-info {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 6.4rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: .8rem;

      p {
        color: ${(props) => props.theme["base-subtitle"]};
        line-height: 130%;
      }

      .quantity-remove {
        display: flex;
        gap: .8rem;
      }
    }
  }

  @media (max-width: 480px) {
    .image-info {
      flex-direction: column;
      align-items: flex-start;
    }

    align-items: center;
  }

  @media (max-width: 395px) {
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-start;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;

  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};

  background: ${(props) => props.theme["base-button"]};
  border: 0;
  border-radius: .6rem;
  padding: 0 .8rem;

  cursor: pointer;

  .icon {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};

    .icon {
      color: ${(props) => props.theme["purple-dark"]}
    }
  }
`