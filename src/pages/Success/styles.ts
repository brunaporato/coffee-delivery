import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 8rem 16rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["yellow-dark"]};

    margin-bottom: .4rem;
  }

  > p {
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    .infos {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      padding: 4rem;
      border-radius: .6rem 3.6rem;
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }

  @media (max-width: 1050px) {
    padding: 8rem;
  }

  @media (max-width: 900px) {
    padding: 8rem 3rem;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 30rem;
    }

    main {
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
    }
  }
`

export const InfosSuccess = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  color: ${(props) => props.theme["base-text"]};
  line-height: 130%;

  div {
    padding: .8rem;
    border-radius: 50%;
    display: flex;

    color: ${(props) => props.theme.background};
  }
  
  .adress {
    background-color: ${(props) => props.theme.purple};
  }

  .timer {
    background-color: ${(props) => props.theme.yellow};
  }

  .payment {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    font-weight: 700;
  }
`
