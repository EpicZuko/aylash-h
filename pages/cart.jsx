import styled from "styled-components";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Modal, Box, Typography, Button } from "@mui/material";
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "@/helpers/CartUtils";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 52px 70px 55px 70px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CartTable = styled.table`
  /* width: 70%; */
  width: 982px;
  border-collapse: collapse;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CartHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  @media (max-width: 768px) {
    font-size: 12px;
  }
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

// const Button = styled.button`
//   background: #ddd;
//   border: none;
//   padding: 5px 10px;
//   cursor: pointer;
// `;

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
  &:hover {
    background-color: #388e3c;
  }
  &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
    opacity: 0.6;
  }
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
const OrderMbankVisa = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0px 20px 0px;
`
const OrderStyledH1 = styled.h1`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.63px;
  letter-spacing: 0%;
`;
const  StyledMbakn = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`

export default function Cart() {
  const [cartItems, setCartItems] = useState(() => loadCartFromLocalStorage());
  const [formData, setFormData] = useState({ fullname: "", address: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  console.log(cartItems);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.address) {
      setOpenModal(true);
      return;
    }

    console.log("Форма жиберилди:", formData, cartItems);

    setOpenSnackbar(true);
    setFormData({ fullname: "", address: "" });
    setCartItems([]);
    localStorage.removeItem("cart");
  };
  // baskets start

  const shipping = 150;

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );

      saveCartToLocalStorage(updatedCart); // Сохраняем в localStorage
      return updatedCart;
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setIsClient(true); // После монтирования компонента меняем флаг
    const savedCart = loadCartFromLocalStorage();
    setCartItems(savedCart);
  }, []);

  if (!isClient) {
    return null; // Избегаем рендера на сервере
  } // Следит за изменениями cartItems

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
        <form onSubmit={handleSubmit}>
          <div>
            <OrderLabelAddress htmlFor="fullname">ФИО:</OrderLabelAddress>
            <InputFamily
              id="fullname"
              type="text"
              placeholder="(клиент жазуу керек)"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div>
            <OrderLabelAddress htmlFor="address">Дарек:</OrderLabelAddress>
            <InputFamily
              id="address"
              type="text"
              placeholder="(клиент жазуу керек)"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <OrderSummaryPrice>Сумма: {totalPrice}KGS</OrderSummaryPrice>
          <OrderSummaryShipping>
            Жеткируу кызматы: {shipping}KGS
          </OrderSummaryShipping>
          <OrderSummaryTotal>
            <strong>Жалпы сумма: {grandTotal}KGS</strong>
          </OrderSummaryTotal>
          <OrderMbankVisa>
            <OrderStyledH1>ТОЛОМ ЖУРГУЗУУ:</OrderStyledH1>
            <StyledMbakn>
              <img src="/images/image 21.svg" alt="" />
              <img src="/images/image 23.svg" alt="" />
            </StyledMbakn>
          </OrderMbankVisa>
          <OrderButton type="submit" disabled={cartItems.length === 0}>
            Буйруктаны каттоо
          </OrderButton>
        </form>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "white",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" component="h2">
              Эскертүү!
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Бардык талааларды толтуруңуз!
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={() => setOpenModal(false)}
            >
              Ок
            </Button>
          </Box>
        </Modal>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{
            "& .MuiSnackbarContent-root": {
              backgroundColor: "#2E7D32", // Темно-зеленый цвет
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(8px)",
              animation: "fadeIn 0.3s ease-in-out",
            },
          }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{
              backgroundColor: "#4CAF50", // Зеленый цвет
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "8px",
              padding: "10px 20px",
            }}
          >
            Буйрутма ийгиликтүү жиберилди!
          </Alert>
        </Snackbar>
      </OrderSummary>
    </Container>
  );
}
