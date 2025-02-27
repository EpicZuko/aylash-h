"use client";
import { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  gap: 4rem;
  height: 525px;
`;

const LeftSide = styled.div`
  position: relative;
  width: 1106px;
  height: 525px;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 20px;

  h2 {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    position: absolute;
    top: 50px;
    left: 20px;
    font-size: 24px;
    font-weight: bold;
  }
`;

const RightSide = styled.div`
  width: 337px;
  height: 383px;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const CardButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #f59e0b;
  padding: 0.5rem 1rem;
  width: 113px;
  height: 41px;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #d97706;
  }
`;

const ProductCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border-radius: 10px;
  height: 183px;
  gap: 10px;

  p {
    align-self: flex-start;
    margin-left: 10px;
  }
`;

const ProductImageLeft = styled.img`
  width: 1106px;
  height: 525px;
  border-radius: 8px;
  object-fit: cover;
`;
const ProductImageRight = styled.img`
  width: 337px;
  height: 183px;
  border-radius: 8px;
  object-fit: cover;
`;

export default function Card() {
  const [leftProduct, setLeftProduct] = useState({
    image: "/images/Rectangle 7.svg",
    title: "Кенсе эмеректери",
    text: "Арзандатуу 50% га чейин",
  });

  const [rightProducts, setRightProducts] = useState([
    {
      image: "/images/Rectangle 8.svg",
      title: "КЕНСЕ ОТУРУГУЧТАРЫ",
      text: "3000KGS жогору",
    },
    {
      image: "/images/Rectangle 9.svg",
      title: "ЖАНЫ ЖАСАЛГА",
      text: "56000KGS",
    },
  ]);

  const swapProducts = (index) => {
    const selectedProduct = rightProducts[index];
    const newLeftProduct = { ...selectedProduct };
    const newRightProducts = [...rightProducts];
    newRightProducts[index] = leftProduct;

    setLeftProduct(newLeftProduct);
    setRightProducts(newRightProducts);
  };

  return (
    <CardContainer>
      <LeftSide>
        <h2>{leftProduct.title}</h2>
        <p>{leftProduct.text}</p>
        <CardButton>Сатып алуу</CardButton>
        <ProductImageLeft src={leftProduct.image} alt="Selected Product" />
      </LeftSide>

      <RightSide>
        {rightProducts.map((product, index) => (
          <ProductCard key={index} onClick={() => swapProducts(index)}>
            <ProductImageRight src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.text}</p>
          </ProductCard>
        ))}
      </RightSide>
    </CardContainer>
  );
}
