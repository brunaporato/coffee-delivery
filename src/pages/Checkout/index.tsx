import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, ConfirmOrderButton, FinishOrderContainer, InputText, OrderInfoContainer, TopOfFinishOrder } from "./styles";
import { SelectPayment } from "./components/SelectPayment";
import { useState } from "react";
import { CartItem } from "./components/CartItem";


export function Checkout() {
  const [activeOption, setActiveOption] = useState<string | null>(null);

  function handleOptionClick(option: string) {
    if(option === activeOption) {
      setActiveOption(null)
    } else {
      setActiveOption(option);
    }
  }

  return (
    <CheckoutContainer>
      <div className="finish-order">
        <h1>Complete seu pedido</h1>
        <FinishOrderContainer>
          <TopOfFinishOrder>
            <MapPinLine size={22} />
            <p>
              Endereço de Entrega
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </TopOfFinishOrder>
          <div className="adress-inputs">
            <InputText placeholder="CEP" className="cep" />
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
        <FinishOrderContainer>
          <TopOfFinishOrder>
            <CurrencyDollar size={22} className="dollar-icon" />
            <p>
              Pagamento
              <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar.
              </span>
            </p>
          </TopOfFinishOrder>
          <div className="payment-options">
            <SelectPayment
              isActive={activeOption === "credit"}
              onClick={() => handleOptionClick("credit")}
              text="cartão de crédito"
              icon={<CreditCard />}
            />
            <SelectPayment
              isActive={activeOption === "debit"}
              onClick={() => handleOptionClick("debit")}
              text="cartão de débito"
              icon={<Bank />}
            />
            <SelectPayment
              isActive={activeOption === "cash"}
              onClick={() => handleOptionClick("cash")}
              text="dinheiro"
              icon={<Money />}
            />
          </div>
        </FinishOrderContainer>
      </div>
      <div className="order-info">
        <h1>Cafés selecionados</h1>
        <OrderInfoContainer>
          <div className="items">
            <CartItem
              title="Café"
              image=""
              quantity={2}
              itemPrice="9,90"
            />
          </div>
          <section className="price">
            <div className="price-items">
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div className="delivery-tax">
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div className="total-order">
              <h2>Total</h2>
              <h2>R$ 33,20</h2>
            </div>
          </section>
          <ConfirmOrderButton to="/success">
            confirmar pedido
          </ConfirmOrderButton>
        </OrderInfoContainer>
      </div>
    </CheckoutContainer>
  )
}