import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./styles";

export function InputNumber() {
  return (
    <InputNumberContainer>
      <button><Minus size={14} weight="bold" /></button>
      <span>0</span>
      <button><Plus size={14} weight="bold" /></button>
    </InputNumberContainer>
  )
}