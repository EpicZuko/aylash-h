import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 20px;
  justify-content: center;
`;

const Card = styled.div`
  /* background: rgba(217, 217, 217, 0.25); */
  /* border-radius: 10px; */
  /* padding: 15px; */
  width: 250px;
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
  /* border-radius: 10px; */
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
  return (
    <>
      <TrendingBannerContainer>
        <TrendingBanner>Тренд буюмдар</TrendingBanner>
      </TrendingBannerContainer>
      <Container>
        <Card>
          <Image src="/images/Rectangle 30.svg" alt="Блендер" />
          <Title>Блендер - ТЕХНОМИР</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <Image src="/images/Rectangle 32.svg" alt="Робот-пылесос" />
          <Title>Робот-пылесос</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <DiscountTag>Акция</DiscountTag>
          <Image src="/images/Rectangle 34.svg" alt="Стиральная машина" />
          <Title>Стиральная машина</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <DiscountTag>Акция</DiscountTag>
          <Image src="/images/Rectangle 36.svg" alt="Тостер" />
          <Title>Тостер</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <Image src="/images/Rectangle 38.svg" alt="Духовка" />
          <Title>Духовка</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <Image src="/images/Rectangle 44.svg" alt="Кофейные зерна" />
          <Title>Кофейные зерна</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <DiscountTag>Акция</DiscountTag>
          <Image src="/images/Rectangle 45.svg" alt="Керамическая сковорода" />
          <Title>Керамическая сковорода</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <Image src="/images/Rectangle 46.svg" alt="Кухня" />
          <Title>Кухня</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <Image src="/images/Rectangle 47.svg" alt="Диван" />
          <Title>Диван</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <Image src="/images/Rectangle 48.svg" alt="Шкаф" />
          <Title>Шкаф</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
      </Container>
    </>
  );
}
