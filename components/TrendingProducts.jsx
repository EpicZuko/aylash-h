import { products } from "@/helpers/constants";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 20px;
  justify-content: center;
`;

const Card = styled.div`
  background: rgba(217, 217, 217, 0.25);
  border-radius: 10px;
  /* padding: 15px; */
  width: 250px;
  height: 280px;
  position: relative;
  cursor: pointer;
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 73%;
  object-fit: cover;
  border-radius: 10px;
`;

const DiscountTag = styled.span`
  position: absolute;
  background: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  top: 10px;
  right: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 10px 0px 10px 0px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ff9800;
  text-align: center;
  margin: 0px 0px 10px 0px;
`;

const OldPrice = styled.span`
  font-size: 14px;
  color: gray;
  text-decoration: line-through;
  margin-left: 10px;
`;
const TrendingBannerContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0px 0px 0px 30px;
  width: 95.5%;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-radius: 5px;
`;
const TrendingBanner = styled.div`
  background: #333;
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  border-radius: 5px;
`;

export default function TrendingProducts() {
  const router = useRouter();
  return (
    <>
      <TrendingBannerContainer>
        <TrendingBanner>Тренд буюмдар</TrendingBanner>
      </TrendingBannerContainer>
      <Container>
        {products.map((product) => (
          <Card
            key={product.id}
            onClick={() => router.push(`/product/${product.id}`)}
          >
            {product.discount && <DiscountTag>Акция</DiscountTag>}
            <Image src={product.images[0]} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>
              {product.newPrice}KGS <OldPrice>{product.oldPrice}KGS</OldPrice>
            </Price>
          </Card>
        ))}
      </Container>
    </>
  );
}
