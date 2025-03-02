import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Box component="footer" >
            <Box sx={{
                background: "#FFA500", padding: "15px 0", display: "flex",
                flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
                justifyContent: "space-around", alignItems: "center", gap: { lg: "0", md: "30px", sm: "30px", xs: "20px" }
            }}>
                <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                    <img src="/icons/ourbarakcha.svg" alt="" />
                    <Box>
                        <Typography sx={{ fontSize: "24px", color: "#3F444A", fontWeight: "bold" }}>Биздин баракчага жазылыңыз</Typography>
                        <Typography sx={{ fontSize: "16px", color: "#3F444A", fontWeight: "bold", maxWidth: "350px" }}>Биз сиздин электрондук почтаңыздын дарегин үчүнчү
                            тараптар менен эч качан бөлүшпөйбүз</Typography>
                    </Box>
                </Box>
                <Box sx={{ height: "40px", maxWidth: { lg: "1000px", sm: "350px", xs: "300px" }, minWidth: { md: "300px", lg: "500px" }, display: "flex" }}>
                    <Box component="input" placeholder='Электрондук почтаңызды киргизиңиз ...' sx={{
                        height: "100%", width: "100%", padding: "0 15px", borderRadius: "4px 0 0 4px",
                        border: "1px solid gray", outline: "none"
                    }} />
                    <Button sx={{ background: "#3F444A", color: "#fff", borderRadius: "0 4px 4px 0", height: "100%", width: "120px" }}>
                        Жазылуу
                    </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <img src="/icons/facebook.svg" alt="" />
                    <Typography sx={{ fontWeight: "bold", color: "#3F444A" }}>Facebook</Typography>
                    <img src="/icons/devidicon.svg" alt="" />
                    <img src="/icons/x.svg" alt="" />
                    <Typography sx={{ fontWeight: "bold", color: "#3F444A" }}>Twitter</Typography>
                    <img src="/icons/devidicon.svg" alt="" />
                    <img src="/icons/pinterest.svg" alt="" />
                </Box>
            </Box>
            <Box sx={{
                display: "flex", justifyContent: "space-around",
                padding: { lg: "30px 0", md: "30px 20px", sm: "30px 20px", xs: "30px 20px" }, alignItems: "start",
                flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" }, gap: { lg: "0", md: "30px", sm: "30px", xs: "20px" }
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "start" }}>
                    <img src="/icons/mainlogo.svg" alt="" />
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/location.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>Бишкек, Гагарина 27</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/phone.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>(+996)708 53 71 35</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/mail.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>cholponzhamankulova@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/clock.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>Иштоо убактысы: 09:00 - 21:00</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "start" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px", padding: "0 10px 0px 0", borderBottom: "2px solid #3F444A", color: "#3F444A" }}>Кардарларды тейлоо</Typography>
                    {/* <img src="/icons/mainlogo.svg" alt="" /> */}
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/circle.svg" alt="" />
                        <Typography sx={{ fontWeight: "200", color: "#3F444A" }}>Байланышуу</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/circle.svg" alt="" />
                        <Typography sx={{ fontWeight: 100, color: "#3F444A" }}>Биз тууралуу</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/circle.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>Дайым берилуучу суроолор</Typography>
                    </Box>

                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "start" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px", padding: "0 10px 0px 0", borderBottom: "2px solid #3F444A", color: "#3F444A" }}>Категория</Typography>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/circle.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>Жеткируу кызматы</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/circle.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>Филиал</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", alignItems: "center", cursor: "pointer" }}>
                        <img src="/icons/circle.svg" alt="" />
                        <Typography sx={{ fontWeight: 200, color: "#3F444A" }}>Кардар тейлоо</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                <img src="/icons/visa.png" alt="" />
                <img src="/icons/mastercard.png" alt="" />
                <img src="/icons/mbank.png" alt="" />
            </Box>
            <Box sx={{ bgcolor: "#FFA500", padding: "15px 0", display: "flex", justifyContent: "center" }}>
                <Typography sx={{ color: "#fff" }}>
                    © 2025 Бишкек
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer