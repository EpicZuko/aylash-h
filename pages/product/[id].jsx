import { products } from '@/helpers/constants'
import { Avatar, Box, Button, Tab, Tabs, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function index() {
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState({})

    

    useEffect(() => {
        
        const found = products.find((i) => i.id === id)
        console.log(found);
        
        setData(found)
    }, [id])
    // const data = {
    //     id: "1",
    //     images: ["/images/Rectangle 7.svg", "/images/Rectangle 8.svg", "/images/Rectangle 9.svg", "/images/Rectangle 7.svg", "/images/Rectangle 8.svg"],
    //     title: "Блендер",
    //     raiting: 5,
    //     newPrice: 980,
    //     oldPrice: 1300,
    //     info: "Блендер — бул ашканада күнүмдүк жашоону жеңилдетүүчү эң керектүү аспаптардын бири. Жогорку сапаттагы технологиялары жана көп функционалдуулугу менен ал ар кандай ингредиенттерди майдалап, аралаштырып, даярдоо процессин тез жана ыңгайлуу кылат. Тамак-ашты ден-соолукка пайдалуу жана даамдуу кылып жасоо үчүн блендер идеалдуу жардамчы болуп саналат. Анын күчтүү мотору жана ар кандай ылдамдыктагы режимдери каалаган текстурага жетүүгө мүмкүнчүлүк берет. Смузи, шорпо, соустар жана дагы башка көптөгөн тамактар үчүн эң сонун тандоо! Блендер менен тамак жасоо жараяны чыныгы ырахатка айланат.",
    //     description: "Күнүмдүк жандуу шоу, анда стилди сүйүүчүлөр  туташып, соода кылып, акыркы мода жана сулуулук тенденцияларын таба алышат.",
    //     allCount: 150,
    //     sold: 120,
    //     remainder: 30,
    //     feedbacks: [
    //         { username: 'Зули', text: "бул ашканада күнүмдүк жашоону жеңилдетүүчү эң керектүү аспаптардын бири. Жогорку сапаттагы технологиялары жана көп функционалдуулугу менен ал ар кандай ингредиенттерди майдалап" },
    //         { username: 'Тариел', text: "бул ашканада күнүмдүк жашоону жеңилдетүүчү эң керектүү аспаптардын бири. Жогорку сапаттагы технологиялары жана көп функционалдуулугу менен ал ар кандай ингредиенттерди майдалап" },
    //         { username: 'Тилек', text: "бул ашканада күнүмдүк жашоону жеңилдетүүчү эң керектүү аспаптардын бири. Жогорку сапаттагы технологиялары жана көп функционалдуулугу менен ал ар кандай ингредиенттерди майдалап" },
    //     ]
    // }

    const [mainImage, setMainImage] = useState('')

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
    // console.log(timeLeft);

    const lastFurnitures = [
        { image: "/images/Rectangle 8.svg", price: 280, title: "Блендер" },
        { image: "/images/Rectangle 7.svg", price: 850, title: "Кастрюля" },
        { image: "/images/Rectangle 8.svg", price: 260, title: "Отургучтар" },
        { image: "/images/Rectangle 9.svg", price: 260, title: "Блендер" },
        { image: "/images/Rectangle 7.svg", price: 760, title: "Илгич" },
    ]

    useEffect(() => {
        setMainImage(data?.id &&data?.images[0])
    }, [data])

    function choseMainImageHandle(e) {
        setMainImage(e)
    }
    console.log(mainImage, "mainImage");
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    const recomendedCards = [
        { id: "1", image: "/images/Rectangle 8.svg", title: "Блендер", newPrice: 450, oldPrice: 600, },
        { id: "1", image: "/images/Rectangle 8.svg", title: "Блендер", newPrice: 450, oldPrice: 600, },
        { id: "1", image: "/images/Rectangle 8.svg", title: "Блендер", newPrice: 450, oldPrice: 600, },
        { id: "1", image: "/images/Rectangle 8.svg", title: "Блендер", newPrice: 450, oldPrice: 600, },
        { id: "1", image: "/images/Rectangle 8.svg", title: "Блендер", newPrice: 450, oldPrice: 600, },
    ]
    return (
        <Box sx={{ padding: "40px 30px" }}>

            {/* 1 */}
            <Box sx={{ display: "flex" }}>
                <Box sx={{ minWidth: "200px", marginRight: "20px" }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold", flexWrap: "nowrap", marginTop: "260px" }}>АКЫРКЫ БУЮМДАР</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                        {lastFurnitures.map((i) => (
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                                <Box sx={{ width: "100px", height: "100px" }}>
                                    <Box component="img" sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }} src={i.image} alt="" />
                                </Box>
                                <Box>
                                    <Typography sx={{ color: "#FFA500", fontSize: "16px", fontWeight: "bold" }}>{i.price} KGS</Typography>
                                    <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 300 }}>{i.title}</Typography>
                                </Box>

                            </Box>
                        ))}
                        <Box sx={{ width: "200px", height: "260px" }}>
                            <Box component="img" sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }} src={"/images/Rectangle 8.svg"} alt="" />
                        </Box>
                    </Box>
                </Box>

                {/* -- */}
                <div>

                    <Box sx={{ display: "flex" }}>

                        <Box sx={{ marginRight: "60px" }}>
                            <Box sx={{ width: "550px", height: "550px" }}>
                                <Box component="img" sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }} src={mainImage} alt="" />
                            </Box>
                            <Box sx={{ display: "flex", gap: "12px", padding: "15px 0" }}>
                                {data?.images?.map((i) => (
                                    <Box onClick={() => choseMainImageHandle(i)} sx={{ width: "100px", height: "100px" }}>
                                        <Box component="img" sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }} src={i} alt="" />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        {/* 2 */}
                        <Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>{data?.title}</Typography>
                                <Box sx={{ display: "flex", gap: "5px" }}>
                                    {[...Array(data?.raiting)].map((i) => (
                                        <img src="/icons/ratingstar.svg" alt="" />
                                    ))}
                                </Box>
                                <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <Typography sx={{ fontSize: "28px", fontWeight: "bold", color: "#FFA500" }}>{data?.newPrice} KGS</Typography>
                                    <Typography sx={{ fontSize: "18px", fontWeight: 300, color: "#4B4B4B", textDecoration: "line-through" }}>{data?.oldPrice} KGS</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{ color: "#4B4B4B", margin: "30px 0" }}>{data?.description}</Typography>

                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                <Box>
                                    <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>Шашыл!</Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>Аяктоо мооноту:</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                                        <Box sx={{
                                            color: "#FFA500", border: "1px solid #4B4B4B66", width: "60px", height: "60px", borderRadius: "6px", display: "flex", justifyContent: "center", alignItems: "center"

                                        }}>{timeLeft.days}</Box>
                                        <Typography sx={{ fontWeight: 100 }}>
                                            Күн
                                        </Typography>
                                    </Box>:
                                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                                        <Box sx={{
                                            color: "#FFA500", border: "1px solid #4B4B4B66", width: "60px", height: "60px", borderRadius: "6px", display: "flex", justifyContent: "center", alignItems: "center"

                                        }}>{timeLeft.hours}</Box>
                                        <Typography sx={{ fontWeight: 100 }}>
                                            Саат
                                        </Typography>
                                    </Box> :
                                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                                        <Box sx={{
                                            color: "#FFA500", border: "1px solid #4B4B4B66", width: "60px", height: "60px", borderRadius: "6px", display: "flex", justifyContent: "center", alignItems: "center"

                                        }}>{timeLeft.minutes}</Box>
                                        <Typography sx={{ fontWeight: 100 }}>
                                            Мүнөт
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px 0" }}>
                                <Box>
                                    <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>@aylan.home</Typography>
                                    {/* <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>Аяктоо мооноту:</Typography> */}
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <Typography>Жеткиликтуу: <span style={{ color: "#FFA500" }}>{data?.remainder}</span> </Typography>
                                    <Box sx={{ width: "150px", background: "#e5e5e5", height: "8px", borderRadius: "8px" }}>
                                        <Box sx={{ width: `${(data?.remainder / (data?.remainder + data?.sold)) * 100}%`, background: "#FFA500", height: "8px", borderRadius: "8px" }} />
                                    </Box>
                                </Box>
                                <Typography>Сатылган: {data?.sold}</Typography>
                            </Box>

                            <Box sx={{ display: "flex", gap: "20px", margin: "80px 0 20px 0 " }}>
                                <Box sx={{
                                    display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", "img": { cursor: "pointer" },
                                    border: "1px solid #c9c9c9", borderRadius: "8px", padding: "0 15px"
                                }}>
                                    <img src="/icons/-.svg" alt="" />
                                    1
                                    <img src="/icons/+.svg" alt="" />
                                </Box>
                                <Button sx={{ color: "#fff", bgcolor: "#FFA500", fontWeight: "bold", padding: "10px 15px" }}>
                                    Себетке кошуу
                                </Button>
                                <Button sx={{ color: "#fff", bgcolor: "#FFA500", fontWeight: "bold", padding: "10px 15px" }}>
                                    Сатып алуу
                                </Button>
                            </Box>
                            <Typography>Болум: Идиш, Блендер </Typography>
                        </Box>
                    </Box>

                    {/* comment block */}
                    <Box>
                        <Box sx={{ width: "100%", maxWidth: 1000, mx: "auto", mt: 4, borderTop: "1px solid #989898", borderBottom: "1px solid #989898" }}>
                            {/* Tabs */}
                            <Tabs sx={{
                                "& .MuiTabs-indicator": {
                                    backgroundColor: "#FFA500", // Custom indicator color
                                },
                                "& .MuiTab-root": {
                                    color: "#aaaaaa", // Default (inactive) tab color
                                },
                                "& .Mui-selected": {
                                    color: "#FFA500", // Active tab color
                                    fontWeight: "#FFA500",
                                },
                                "&.css-1usuzwp-MuiButtonBase-root-MuiTab-root": {
                                    color: "#FFA500",
                                }
                            }} value={activeTab} onChange={handleChange} centered>
                                <Tab label="Маалымат" />
                                <Tab label={`Пикир (${data?.feedbacks?.length})`} />
                            </Tabs>

                            {/* Tab Content */}
                            <Box sx={{ mb: 0, pb: 2, borderTop: "1px solid #ddd", borderRadius: 2 }}>
                                {activeTab === 0 && <Typography sx={{ textAlign: "center", mt: 3 }}>{data?.info}</Typography>}
                                {activeTab === 1 && <Typography>
                                    <Box>
                                        {data?.feedbacks?.map((i) => (
                                            <Box sx={{ padding: "10px 20px", background: "#f2f1f1", margin: "10px 0", borderRadius: "10px" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <Avatar /><Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>{i.username}</Typography>
                                                </Box>
                                                <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>{i?.text}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Typography>}
                            </Box>
                        </Box>

                        <Box>
                            <Typography sx={{ textAlign: "center", margin: "25px 0" }}>Тренд буюмдар</Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px", }}>
                                {recomendedCards.map((i) => (
                                    <Box sx={{ margin: "15px 0" }}>
                                        <Box sx={{ minWidth: "200px", maxWidth: "280px", height: "300px" }}>
                                            <Box component="img" sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }} src={i.image} alt="" />
                                        </Box>
                                        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "28px", fontWeight: "bold", color: "#FFA500" }}>{i.newPrice} KGS</Typography>
                                            <Typography sx={{ fontSize: "18px", fontWeight: 300, color: "#4B4B4B", textDecoration: "line-through" }}>{i.oldPrice} KGS</Typography>
                                        </Box>
                                        <Typography>{i.title}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                </div>



                <Box>
                </Box>

            </Box>

        </Box>
    )
}

export default index