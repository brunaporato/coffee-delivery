import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
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

  .adress-top {
    display: flex;
    gap: .8rem;
    align-self: stretch;
    color: ${(props) => props.theme["yellow-dark"]};

    p {
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
  }

  .adress-inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    white-space: nowrap;

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

export const OrderInfoContainer = styled.section``
