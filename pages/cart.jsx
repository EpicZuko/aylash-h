import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 52px 70px 55px 70px;
`;

const CartTable = styled.table`
  /* width: 70%; */
  width: 982px;
  border-collapse: collapse;
`;

const CartHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #ddd;
`;

const CartRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const CartCell = styled.td`
  padding: 10px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  background: #ddd;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const OrderSummary = styled.div`
  width: 293px;
  height: 414px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
`;
const OrderH1 = styled.h1`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 17.07px;
  text-align: center;
  padding: 0px 0px 23px 0px;
`;
const InputFamily = styled.input`
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  margin-bottom: 24px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 10px;
  line-height: 12.19px;
  outline: none;
`;
const OrderLabelAddress = styled.label`
  /* display: block; */
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 14.63px;
  padding: 0px 21px 0px 0px;
`;

const OrderButton = styled.button`
  background: orange;
  color: white;
  border: none;
  padding: 10px;
  width: 223px;
  height: 33px;
  cursor: pointer;
  margin-top: 10px;
`;
const OrderSummaryPrice = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 14.6px;
  padding: 61px 0px 12px 0px;
`;
const OrderSummaryShipping = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 12.17px;
  padding: 0px 0px 12px 0px;
`;
const OrderSummaryTotal = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 14.6px;
  padding: 0px 0px 12px 0px;
`;
const OrderSummaryFullTravel = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 14.63px;
  padding: 30px 0px 0px 0px;
`;
export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 245;
  const shipping = 150;
  const total = price * quantity + shipping;

  return (
    <Container>
      <div>
        <CartTable>
          <thead>
            <tr>
              <CartHeader>ФОТО</CartHeader>
              <CartHeader>ПРОДУКТ АТАЛЫШЫ</CartHeader>
              <CartHeader>БААСЫ</CartHeader>
              <CartHeader>ЖАЛПЫ САНЫ</CartHeader>
              <CartHeader>ЖАЛПЫ СУММА</CartHeader>
              <CartHeader>ОЧУРУУ</CartHeader>
            </tr>
          </thead>
          <tbody>
            <CartRow>
              <CartCell>
                <img
                  src="/images/Rectangle 118.svg"
                  alt="Керамикалык вазалар"
                  width="50"
                />
              </CartCell>
              <CartCell>Керамикалык вазалар</CartCell>
              <CartCell>{price}KGS</CartCell>
              <CartCell>
                <QuantityControl>
                  <Button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </Button>
                  {quantity}
                  <Button onClick={() => setQuantity((q) => q + 1)}>+</Button>
                </QuantityControl>
              </CartCell>
              <CartCell>{price * quantity}KGS</CartCell>
              <CartCell>
                <Button>✖</Button>
              </CartCell>
            </CartRow>
          </tbody>
        </CartTable>
      </div>
      <OrderSummary>
        <OrderH1>Буйрутма</OrderH1>
        <div>
          <OrderLabelAddress htmlFor="">ФИО:</OrderLabelAddress>
          <InputFamily type="text" placeholder="(клиент жазуу керек)" />
        </div>
        <div>
          <OrderLabelAddress htmlFor="">Дарек:</OrderLabelAddress>
          <InputFamily type="text" placeholder="(клиент жазуу керек)" />
        </div>
        <OrderSummaryPrice>Сумма: {price * quantity}KGS</OrderSummaryPrice>
        <OrderSummaryShipping>
          Жеткируу кызматы: {shipping}KGS
        </OrderSummaryShipping>
        <OrderSummaryTotal>
          <strong>Жалпы сумма: {total}KGS</strong>
        </OrderSummaryTotal>
        <OrderSummaryFullTravel>
          ТОЛОМ ЖУРУЗУУ: <img src="/images/image 21.svg" alt="" />{" "}
          <img src="/images/image 23.svg" alt="" />
        </OrderSummaryFullTravel>
        <OrderButton>Буйруктаны каттоо</OrderButton>
      </OrderSummary>
    </Container>
  );
}
