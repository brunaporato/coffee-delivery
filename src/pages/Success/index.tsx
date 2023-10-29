import { InfosSuccess, SuccessContainer } from "./styles";
import successImg from "../../assets/succesImg.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <main>
        <div className="infos">
          <InfosSuccess>
            <div className="adress"><MapPin weight="fill" /></div>
            <p>
              Entrega em <span>Rua João Daniel Martinelli, 102 <br /></span>
              Farrapos - Porto Alegre, RS
            </p>
          </InfosSuccess>
          <InfosSuccess>
            <div className="timer"><Timer weight="fill" /></div>
            <p>
              Previsão de entrega<br />
              <span>20 min - 30 min</span>
            </p>
          </InfosSuccess>
          <InfosSuccess>
            <div className="payment"><CurrencyDollar /></div>
            <p>
              Pagamento na entrega<br />
              <span>Cartão de crédito</span>
            </p>
          </InfosSuccess>
        </div>
        <img src={successImg} alt="" />
      </main>
    </SuccessContainer>
  )
}