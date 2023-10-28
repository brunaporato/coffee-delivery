import { MapPinLine } from "phosphor-react";
import { CheckoutContainer, FinishOrderContainer, InputText, OrderInfoContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="finish-order">
        <h1>Complete seu pedido</h1>
        <FinishOrderContainer>
          <div className="adress-top">
            <MapPinLine size={24} />
            <p>
              Endereço de Entrega
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </div>
          <div className="adress-inputs">
            <InputText placeholder="CEP" />
            <InputText placeholder="Rua" />
            <div className="number">
              <InputText placeholder="Número" />
              <InputText placeholder="Complemento" />
            </div>
            <div className="city-state">
              <InputText placeholder="Bairro" />
              <InputText placeholder="Cidade" />
              <InputText placeholder="UF" />
            </div>
          </div>
        </FinishOrderContainer>
        {/*
          TODO: continuar produzindo o layout da página checkout, parei no box de endereço
        */}
        <FinishOrderContainer></FinishOrderContainer>
      </div>
      <div className="order-info">
        <h1>Cafés selecionados</h1>
        <OrderInfoContainer></OrderInfoContainer>
      </div>
    </CheckoutContainer>
  )
}