import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr minmax(42rem, 1fr);
  gap: 3.2rem;

  padding: 4rem 16rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 1.5rem;
  }
`

export const FinishOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  align-self: stretch;

  background: ${(props) => props.theme["base-card"]};
  padding: 4rem;
  border-radius: 6px;

  margin-bottom: 1.2rem;

  .adress-inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    white-space: nowrap;


    .cep {
      width: fit-content;
    }

    .number {
      display: grid;
      gap: 1.2rem;
      grid-template-columns: 1fr 2fr;
    }

    .city-state {
      display: grid;
      gap: 1.2rem;
      grid-template-columns: 2fr 3fr 1fr;
    }
  }

  .payment-options {
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

    width: 100%;
  }
`

export const TopOfFinishOrder = styled.div`
  display: flex;
  gap: .8rem;
  align-self: stretch;
  color: ${(props) => props.theme["yellow-dark"]};


  .dollar-icon {
    color: ${(props) => props.theme.purple};
  }

  p {
    flex: 1;

    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;

    display: flex;
    flex-direction: column;
    gap: .2rem;

    span {
      font-size: 1.4rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`

export const InputText = styled.input`
  background: ${(props) => props.theme["base-input"]};
  border: 0;
  outline: 1px solid ${(props) => props.theme["base-button"]};;

  padding: 1.2rem;

  min-width: 0;

  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: ${(props) => props.theme["base-text"]};

  border-radius: 4px;

  &:focus {
    outline-color: ${(props) => props.theme["yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`

export const OrderInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 4rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: .6rem 4.4rem;

  .price {
    display: grid;
    gap: 1.2rem;

    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1.4rem;
      line-height: 130%;
    }

    span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1.6rem;
    }

    h2 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 2rem;
      font-weight: 700;
      line-height: 130%;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  border: 0;
  padding: 1.2rem .8rem;
  border-radius: .6rem;

  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 160%;
  color: ${(props) => props.theme.white};

  cursor: pointer;

  transition: all .3s ease;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`
