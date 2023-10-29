import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./styles";

interface InputNumberProps {
  quantity: number;
}

export function InputNumber({quantity}: InputNumberProps) {
  return (
    <InputNumberContainer>
      <button><Minus size={14} weight="bold" /></button>
      <span>{quantity}</span>
      <button><Plus size={14} weight="bold" /></button>
    </InputNumberContainer>
  )
}