import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`

export const MenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;

  padding: 3.2rem 16rem 16rem;

  h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
  }

  .menu {
    display: grid;
    grid-gap: 4rem 3.2rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`