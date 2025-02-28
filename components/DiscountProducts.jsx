"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  /* background: #f8f8f8; */
`;

const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
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
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.94px;
  color: rgba(0, 0, 0, 1);
  padding: 0px 0px 12px 15px;
`;

const Price = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.94px;
  color: #ff9800;
  padding: 0px 0px 10px 15px;
`;

const OldPrice = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
  color: gray;
  text-decoration: line-through;
  margin-left: 10px;
`;
const Text = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 30.63px;
  width: 323px;
  height: 75px;
  margin: 0px 0px 31px 15px;
`;
const Timer = styled.div`
  display: flex;
  gap: 5px;
  font-size: 14px;
  margin: 0px 0px 0px 15px;
`;
const HurryUp = styled.h1`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  margin: 9px 0px 17px 0px;
`;
const CompletionDate = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
  letter-spacing: 0%;
`;
const Day = styled.h1`
  width: 40px;
  height: 40px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
  border-radius: 40px;
`;
const Hour = styled.h1`
  width: 40px;
  height: 40px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
  border-radius: 40px;
`;
const TimeBlock = styled.div`
  text-align: center;
  background: #f3f3f3;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  background: #e0e0e0;
  padding: 10px 20px;
  margin: 30px 13px 75px 20px;
  border-radius: 5px;
  justify-content: space-between;
`;

const BannerLabel = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 10px 15px;
  border-radius: 5px 0 0 5px;
  font-weight: bold;
  cursor: pointer;
`;

const BannerText = styled.p`
  margin: 0;
  flex-grow: 1;
  text-align: center;
`;

const BannerButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
`;

const DailyDiscountsContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0px 0px 0px 23px;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
`;
const DailyDiscounts = styled.h1`
  width: 200px;
  /* height: 33px; */
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12px;
  /* margin: 0px 0px 0px 23px; */
  padding: 7px 6px 11px 7px;
  background-color: rgba(64, 67, 73, 1);
  color: white;
  /* line-height: 14.63px; */
`;
const PercentageButtonContainer = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 60px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100px;
  left: 423px;
`;
const PercentageButton = styled.button`
  width: 82px;
  height: 82px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 30px;
  line-height: 36.57px;
  text-align: center;
  border-radius: 40px;
  border: none;
  background-color: rgba(255, 165, 0, 1);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;
const MinimalistText = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.38px;
  position: absolute;
  left: 578px;
  top: 99px;
  /* text-align: center; */
`;
const BuyInButton = styled.button`
  width: 96px;
  height: 24px;
  border-radius: 5px;
  background-color: rgba(255, 165, 0, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.63px;
  position: absolute;
  top: 127px;
  left: 790px;
  cursor: pointer;
`;
const ImagesAction = styled.img`
  width: 1496px;
  height: 196px;
  margin: 64px 0px 75px 0px;
  border-radius: 4px;
`;
const PercentContainer = styled.div`
  position: relative;
`;
export default function DiscountProducts() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 10);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = deadline - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Banner>
        <BannerLabel>
          <img src="/images/gift.svg" alt="" />
        </BannerLabel>
        <BannerText>
          Дем алыш күндөрү күн сайын жаңы сунуштарды / белектерди алыңыз - Жаңы
          купон коду: Белек2024
        </BannerText>
        <BannerButton>Купон алуу</BannerButton>
      </Banner>
      <DailyDiscountsContainer>
        <DailyDiscounts>Кунумдук арзандатуулар</DailyDiscounts>
      </DailyDiscountsContainer>
      <Container>
        <Card>
          <div style={{ position: "relative" }}>
            <DiscountTag>Акция</DiscountTag>
            <Image src="/images/Rectangle 15.svg" alt="Керамическая ваза" />
          </div>
          <div>
            <Title>Керамическая ваза</Title>
            <Price>
              245KGS <OldPrice>365KGS</OldPrice>
            </Price>
            <Text>
              Күнүмдүк жандуу шоу, анда стилди сүйүүчүлөр туташып, соода кылып,
              акыркы мода жана сулуулук тенденцияларын таба алышат.
            </Text>
            <Timer>
              <div>
                <HurryUp>Шашыл!</HurryUp>
                <CompletionDate>Аяктоо мөөнөтү:</CompletionDate>
              </div>
              <TimeBlock>
                <Day>{timeLeft.days}</Day>
                <span>Күн</span>
              </TimeBlock>
              <TimeBlock>
                <Hour>{timeLeft.hours}</Hour>
                <span>Саат</span>
              </TimeBlock>
              <TimeBlock>
                <Hour>{timeLeft.minutes}</Hour>
                <span>Мүнөт</span>
              </TimeBlock>
              <TimeBlock>
                <Hour>{timeLeft.seconds}</Hour>
                <span>Секунд</span>
              </TimeBlock>
            </Timer>
          </div>
        </Card>
        <Card>
          <div style={{ position: "relative" }}>
            <DiscountTag>Акция</DiscountTag>
            <Image src="/images/Rectangle 16.svg" alt="Керамическая ваза" />
          </div>
          <div>
            <Title>Блендер</Title>
            <Price>
              980KGS <OldPrice>1200KGS</OldPrice>
            </Price>
            <Text>
              Күнүмдүк жандуу шоу, анда стилди сүйүүчүлөр туташып, соода кылып,
              акыркы мода жана сулуулук тенденцияларын таба алышат.
            </Text>
            <Timer>
              <div>
                <HurryUp>Шашыл!</HurryUp>
                <CompletionDate>Аяктоо мөөнөтү:</CompletionDate>
              </div>
              <TimeBlock>
                <Day>{timeLeft.days}</Day>
                <span>Күн</span>
              </TimeBlock>
              <TimeBlock>
                <Hour>{timeLeft.hours}</Hour>
                <span>Саат</span>
              </TimeBlock>
              <TimeBlock>
                <Hour>{timeLeft.minutes}</Hour>
                <span>Мүнөт</span>
              </TimeBlock>
              <TimeBlock>
                <Hour>{timeLeft.seconds}</Hour>
                <span>Секунд</span>
              </TimeBlock>
            </Timer>
          </div>
        </Card>
      </Container>
      <PercentContainer>
        <ImagesAction src="/images/Rectangle 20.svg" alt="" />
        <div>
          <PercentageButtonContainer>
            <PercentageButton>75%</PercentageButton>
          </PercentageButtonContainer>
          <div>
            <MinimalistText>
              Диван - заманбап жана минималисттик дизайн
            </MinimalistText>
            <BuyInButton>Сатып алуу</BuyInButton>
          </div>
        </div>
      </PercentContainer>
    </div>
  );
}
