import { products } from '@/helpers/constants';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Index() {
    const router = useRouter()
    const { id } = router.query

    const [resultSearch, setResultSearch] = useState([])

    useEffect(() => {
        const reslut = products.filter((i) => {
            return i.title.toLowerCase().includes(id.toLowerCase())
        })
        setResultSearch(reslut)
    }, [id])
    console.log(resultSearch);

    return (
        <Box sx={{ padding: "0px 20px" }}>
            <Typography sx={{ textAlign: "center", margin: "25px 0" }}>Результат поиска: <span style={{ color: "#FFA500" }}> {id}</span></Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { lg: "1fr 1fr 1fr 1fr 1fr", md: "1fr 1fr 1fr", sm: "1fr 1fr" }, gap: "15px", }}>
                {resultSearch.map((i) => (
                    <Box onClick={() => router.push(`/product/${i.id}`)} sx={{ margin: "15px 0", background: "#F6F6F6", }}>
                        <Box sx={{ width: "100%", height: "300px" }}>
                            <Box component="img" sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }} src={i.images[0]} alt="" />
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px", alignItems: "center", padding: "10px" }}>
                            <Typography sx={{ fontSize: "28px", fontWeight: "bold", color: "#FFA500" }}>{i.newPrice} KGS</Typography>
                            <Typography sx={{ fontSize: "18px", fontWeight: 300, color: "#4B4B4B", textDecoration: "line-through" }}>{i.oldPrice} KGS</Typography>
                        </Box>
                        <Typography sx={{ padding: "10px" }}>{i.title}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Index