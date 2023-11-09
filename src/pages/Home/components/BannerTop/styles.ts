import styled from "styled-components";
import background from "../../../../assets/Background.png"

export const BannerTopContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;

  max-width: 100%;
  
  padding: 9.2rem 16rem;
  display: grid;
  grid-template-columns: 1fr 47.6rem;
  gap: 7.9rem;

  .text {
    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-family: 'Baloo 2', sans-serif;
      font-size: 4.8rem;
      font-weight: 800;
      line-height: 130%;
      margin-bottom: 1.6rem;
    }

    > p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 2rem;
      line-height: 130%;

      margin-bottom: 7.4rem;
    }

    .items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    padding-top: 0;

    img {
      width: 30rem;
    }
  }
  `