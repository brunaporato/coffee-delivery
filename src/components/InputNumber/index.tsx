import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./styles";
// import { useState } from "react";

interface InputNumberProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function InputNumber({ onIncrease, onDecrease, quantity }: InputNumberProps) {
  // const [quantity, setQuantity] = useState(1)

  // function handleAddQuantity() {
  //   setQuantity(quantity + 1);
  // }

  // function handleRemoveQuantity() {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // }

  return (
    <InputNumberContainer>
      <button>
        <Minus size={14} weight="bold" onClick={onDecrease} />
      </button>
      <span>{quantity}</span>
      <button>
        <Plus size={14} weight="bold" onClick={onIncrease} />
      </button>
    </InputNumberContainer>
  );
}