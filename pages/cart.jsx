import styled from "styled-components";
import { useEffect, useState } from "react";

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
  height: auto;
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
  line-height: 20.17px;
  padding: 0px 0px 12px 0px;
  height: auto;
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
  const [cartItems, setCartItems] = useState([]);
console.log(cartItems)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Проверяем, что код выполняется на клиенте (в браузере)
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart)); // Преобразуем строку в объект и обновляем состояние
      }
    }
  }, []);

  const shipping = 150;

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddItem = (newItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.newPrice * item.quantity,
    0
  );
  const grandTotal = totalPrice + shipping;

  return (
    <Container>
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
          {cartItems.map((item) => (
            <CartRow key={item.id}>
              <CartCell>
                <img src={item.image} alt={item.name} width="50" />
              </CartCell>
              <CartCell>{item.title}</CartCell>
              <CartCell>{item.newPrice}KGS</CartCell>
              <CartCell>
                <QuantityControl>
                  <Button onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </Button>
                  {item.quantity}
                  <Button onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </Button>
                </QuantityControl>
              </CartCell>
              <CartCell>{item.newPrice * item.quantity}KGS</CartCell>
              <CartCell>
                <Button onClick={() => handleRemoveItem(item.id)}>✖</Button>
              </CartCell>
            </CartRow>
          ))}
        </tbody> 
      </CartTable>

      <OrderSummary>
        <OrderH1>Буйрутма</OrderH1>
        <form>
          <div>
            <OrderLabelAddress htmlFor="fullname">ФИО:</OrderLabelAddress>
            <InputFamily
              id="fullname"
              type="text"
              placeholder="(клиент жазуу керек)"
            />
          </div>
          <div>
            <OrderLabelAddress htmlFor="address">Дарек:</OrderLabelAddress>
            <InputFamily
              id="address"
              type="text"
              placeholder="(клиент жазуу керек)"
            />
          </div>
        </form>
        <OrderSummaryPrice>Сумма: {totalPrice}KGS</OrderSummaryPrice>
        <OrderSummaryShipping>
          Жеткируу кызматы: {shipping}KGS
        </OrderSummaryShipping>
        <OrderSummaryTotal>
          <strong>Жалпы сумма: {grandTotal}KGS</strong>
        </OrderSummaryTotal>
        <OrderButton>Буйруктаны каттоо</OrderButton>
      </OrderSummary>
    </Container>
  );
}
