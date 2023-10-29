import { SelectPaymentContainer } from "./styles";

interface SelectPaymentProps {
  isActive: boolean;
  onClick: () => void;
  text: string;
  icon: JSX.Element;
}

export function SelectPayment({ isActive, onClick, text, icon }: SelectPaymentProps) {
  return (
    <SelectPaymentContainer onClick={onClick}>
      <button className={isActive ? 'active' : ''}>
        <div className="icon">
        {icon}
        </div>
        <p>{text}</p>
      </button>
    </SelectPaymentContainer>
  )
}