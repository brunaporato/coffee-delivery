import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  background: ${(props) => props.theme["base-button"]};

  padding: .8rem;
  border-radius: .6rem;

  text-align: center;

  button {
    background: none;
    border: 0;

    color: ${(props) => props.theme.purple};
    
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`