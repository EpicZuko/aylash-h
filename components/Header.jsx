import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from "@mui/material";
import GroupedMenu from './ui/Burger';
import { useRouter } from 'next/router';
import { products } from '@/helpers/constants';
// import MainLogo from "../public/icons/mainlogo.svg"


function Header() {
    const [isActive, setIsActive] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const router = useRouter()
    const [searchValue, setSearchValue] = useState("")
    const [resultSearch, setResultSearch] = useState([])
    const open = Boolean(anchorEl);
    function isActiveBtn(e) {
        setIsActive(e)
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    function navigateNamdle(e) {
        router.push(e)
    }

    function getSearchValueHandle(e) {
        setSearchValue(e.target.value)
    }

    useEffect(() => {

        const result = products.filter((i) => {
            if (searchValue.length > 0) {
                return i.title.toLowerCase().includes(searchValue.toLowerCase())
            }
        })
        setResultSearch(result)
    }, [searchValue])


    console.log(resultSearch, "resultSearch");


    return (
        <Box component={"header"} sx={{ background: "#FFA500", }}>
            <GroupedMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
            <Box sx={{ display: "flex", justifyContent: "end", borderBottom: "1px solid black" }}>
                <Box component="select" sx={{ margin: "8px", background: "#FFA500", outline: "none" }} name="cars" id="cars">
                    <option value="volvo">Руский</option>
                    <option value="saab">Кыргызча</option>

                </Box>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 30px" }}>
                <img onClick={() => navigateNamdle("/")} src={"/icons/mainlogo.svg"} />
                <Box sx={{ display: "flex", alignItems: "center", gap: "20px", minWidth: { md: "300px", lg: "800px" } }}>
                    <Typography onClick={() => navigateNamdle("/")} sx={{ cursor: "pointer" }}>БАШКЫ БЕТ</Typography>
                    <Typography sx={{ cursor: "pointer" }}>ДУКОН</Typography>
                    <Typography sx={{ cursor: "pointer" }}>АКЦИЯ</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={"/icons/auth.svg"} alt='auth' />
                        <Typography sx={{ fontSize: "14px", fontWeight: "200", cursor: "pointer" }}>Кируу же катталуу</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={"/icons/phone.svg"} alt='auth' />
                        <Typography sx={{ fontSize: "14px", fontWeight: "200", cursor: "pointer" }}>(+996) 708 53 71 35</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 30px" }}>
                <Box onClick={handleClick} sx={{
                    background: "#3F444A", borderRadius: "5px 5px 0 0", maxWidth: "210px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: 'center', gap: "10px", padding: "10px 20px"
                }}>
                    <img src="/icons/burger.svg" alt="burger" />
                    <Typography sx={{ color: "#fff" }}>БОЛУМДОР</Typography>
                </Box>
                <Box sx={{ height: "40px", minWidth: { md: "300px", lg: "800px" }, display: "flex", position: "relative" }}>
                    <Box onChange={getSearchValueHandle} component="input" placeholder='Издоо ...' sx={{
                        height: "100%", width: "100%", padding: "0 15px", borderRadius: "4px 0 0 4px",
                        border: "1px solid gray", outline: "none"
                    }} />
                    <Button sx={{ background: "#3F444A", color: "#fff", borderRadius: "0 4px 4px 0", height: "100%" }}>
                        <img src="/icons/search.svg" alt="" />
                    </Button>
                    {searchValue.length > 0 && <Box sx={{ position: "absolute", padding: '10px', width: "100%", top: 45, background: "#fff" }}>
                        {resultSearch.length < 1 ? <Box sx={{ padding: "6px 10px", }}>Нечего не найден</Box> :
                            <Box>
                                {resultSearch.map((i) => (
                                    <Typography onClick={() => navigateNamdle(`/search/${i.title}`)} sx={{ padding: "6px 10px", borderRadius: "6px", margin: "4px", ":hover": { background: "#ffa60015" }, cursor: "pointer" }}>{i.title}</Typography>
                                ))}
                            </Box>
                        }
                    </Box>}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
                    <Box onClick={() => isActiveBtn("like")} sx={{
                        background: isActive === "like" && "#3F444A", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center",
                        width: "40px", height: "40px", cursor: "pointer"
                    }}>
                        <img src="/icons/like.svg" alt="" />
                    </Box>
                    <Box sx={{
                        background: isActive === "cart" && "#3F444A", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center",
                        width: "40px", height: "40px", cursor: "pointer"
                    }} onClick={() => {
                        isActiveBtn("cart")
                        navigateNamdle("/cart")
                    }}>
                        <img src="/icons/cart.svg" alt="" />
                    </Box>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography sx={{ fontWeight: "bold", color: "#fff" }}>КАРТА - </Typography>
                    <Typography sx={{ fontWeight: "bold", color: "#3F444A" }}>0.00KGS</Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Header