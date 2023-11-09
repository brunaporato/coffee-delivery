import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, ConfirmOrderButton, FinishOrderContainer, InputText, OrderInfoContainer, TopOfFinishOrder } from "./styles";
import { SelectPayment } from "./components/SelectPayment";
import { useState, useContext } from "react";
import { CartItem } from "./components/CartItem";
import { ProductContext } from "../../context/ProductContext";

export interface OrderInfo {
  paymentOption: string | null
  city: string
  state: string
  cep: string
  number: string
  neighbourhood: string
  street: string
}


export function Checkout() {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [cep, setCep] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [neighbourhood, setNeighbourhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const { cartProducts } = useContext(ProductContext);

  const localStorage = window.localStorage;
  
  let totalItemsPrice = 0;
  const deliveryTax = 3.5;

  cartProducts.forEach((product) => {
    totalItemsPrice += parseFloat(product.price.replace(",", ".")) * product.quantity;
  });

  const totalItemsPriceFormatted = totalItemsPrice.toFixed(2).replace(".", ",");
  
  const finalPrice = totalItemsPrice + deliveryTax;
  const finalPriceFormatted = finalPrice.toFixed(2).replace(".", ",");
  
  function handleOptionClick(option: string) {
    if(option === activeOption) {
      setActiveOption(null)
    } else {
      setActiveOption(option);
    }
  }

  function handleCheckout() {
    const orderInfo: OrderInfo = {
      paymentOption: activeOption,
      city: city,
      state: state,
      cep: cep,
      number: number,
      neighbourhood: neighbourhood,
      street: street,
    }

    localStorage.setItem("@coffeedelivery:orderinfo", JSON.stringify(orderInfo))
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
            <InputText
              placeholder="CEP"
              className="cep"
              onChange={(e) => setCep(e.target.value)}
            />
            <InputText
              placeholder="Rua"
              onChange={(e) => setStreet(e.target.value)}
            />
            <div className="number">
              <InputText
                placeholder="Número"
                onChange={(e) => setNumber(e.target.value)}
              />
              <InputText
                placeholder="Complemento"
              />
            </div>
            <div className="city-state">
              <InputText
                placeholder="Bairro"
                onChange={(e) => setNeighbourhood(e.target.value)}
              />
              <InputText
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
              <InputText
                placeholder="UF"
                onChange={(e) => setState(e.target.value)}
              />
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
              isActive={activeOption === "Cartão de Crédito"}
              onClick={() => handleOptionClick("Cartão de Crédito")}
              text="cartão de crédito"
              icon={<CreditCard />}
            />
            <SelectPayment
              isActive={activeOption === "Cartão de Débito"}
              onClick={() => handleOptionClick("Cartão de Débito")}
              text="cartão de débito"
              icon={<Bank />}
            />
            <SelectPayment
              isActive={activeOption === "Dinheiro"}
              onClick={() => handleOptionClick("Dinheiro")}
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
            {cartProducts &&
              cartProducts.map((product) => {
                return (
                  <CartItem
                    key={product.id}
                    product={product}
                  />
                )
              })
            }
          </div>
          <section className="price">
            <div className="price-items">
              <p>Total de itens</p>
              <span>R$ {totalItemsPriceFormatted}</span>
            </div>
            <div className="delivery-tax">
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div className="total-order">
              <h2>Total</h2>
              <h2>R$ {finalPriceFormatted}</h2>
            </div>
          </section>
          <ConfirmOrderButton
            to="/success"
            onClick={handleCheckout}
          >
            confirmar pedido
          </ConfirmOrderButton>
        </OrderInfoContainer>
      </div>
    </CheckoutContainer>
  )
}