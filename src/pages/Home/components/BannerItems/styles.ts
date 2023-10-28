import styled from "styled-components";

export type ItemBackgroundColor = 'yellow' | 'yellow-dark' | 'purple' | 'base-text'

interface BannerItemsContainerProps {
  color: ItemBackgroundColor;
}

export const BannerItemsContainer = styled.div<BannerItemsContainerProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    background: ${(props) => props.theme[props.color]};
    color: ${(props) => props.theme.background};

    padding: .8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 130%;
  }
`