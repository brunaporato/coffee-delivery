import styled from "styled-components";

export const SelectPaymentContainer = styled.div`
  button {
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    border: 1px solid transparent;

    font-family: 'Roboto', sans-serif;

    width: 16rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.6rem;

    text-transform: uppercase;
    font-size: 1.05rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};

    cursor: pointer;

    &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
  }

  .active {
    border-radius: 6px;
    background: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme.purple};
  }

  .icon {
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
  }
`