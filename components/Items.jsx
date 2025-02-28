import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  /* background: #f8f8f8; */
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 0px 0px 0px 10px;
`;

const MainCard = styled.div`
  /* background: rgba(217, 217, 217, 0.25); */
  width: 200px;
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

const Card = styled.div`
  /* background: rgba(217, 217, 217, 0.25); */
  width: 200px;
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
  width: 204px;
  height: 297px;
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
  margin: 10px 0;
  text-align: center;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ff9800;
  text-align: center;
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

export default function Items() {
  return (
    <>
      <TrendingBannerContainer>
        <TrendingBanner>Тренд товарлар</TrendingBanner>
      </TrendingBannerContainer>
      <Container>
        <MainCard>
          <Image src="/images/image (8).svg" alt="Блендер" />
          <Title> Керамические сковороды</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </MainCard>
        <Card>
          <Image src="/images/image (9).svg" alt="Робот-пылесос" />
          <Title>Робот-пылесос</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <DiscountTag>Акция</DiscountTag>
          <Image src="/images/image (10).svg" alt="Стиральная машина" />
          <Title>Стиральная машина</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <DiscountTag>Акция</DiscountTag>
          <Image src="/images/image (11).svg" alt="Тостер" />
          <Title>Тостер</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <Card>
          <Image src="/images/image (12).svg" alt="Духовка" />
          <Title>Духовка</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </Card>
        <MainCard>
          <Image src="/images/image (8).svg" alt="Блендер" />
          <Title> Керамические сковороды</Title>
          <Price>
            450KGS <OldPrice>560KGS</OldPrice>
          </Price>
        </MainCard>
      </Container>
    </>
  );
}
