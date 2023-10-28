import { BannerItemsContainer, ItemBackgroundColor } from "./styles";

interface BannerItemsProps {
  text: string;
  icon: JSX.Element;
  color: ItemBackgroundColor;
}

export function BannerItems(props: BannerItemsProps) {
  return (
    <BannerItemsContainer color={props.color}>
      <span>
        {props.icon}
      </span>
      <p>
        {props.text}
      </p>
    </BannerItemsContainer>
  )
}