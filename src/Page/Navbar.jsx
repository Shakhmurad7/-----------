import { Container, Stack, Typography, Box } from "@mui/material"
import imge from "../img/Vector (2).png"
import { useState } from "react"

1
const Navbar =()=>{
    const [Menu , setMenu] = useState(false)
    return(
        <>

        <Box sx={{
             boxShadow:'0px 0px 3px 0px '
        }}>

     <Container sx={{ display:"flex",alignItems:'center', justifyContent:"space-between" , padding:'15px'}}>
        <div className="pageimg">
            <img src={imge}/>
            <b>MegaTexnika</b>
        </div>
        <div className={`Navbar ${Menu? `Navbar`:`active`}`}>
        <a href={"/"}>EsasSehve</a>
        <a href={"/Haqqimizda"}>Haqqmizda</a>
        <a href={"/Elaqe"}>Elaqe</a>
        <a href={"/Texnikalar"}>Texnikalar</a>
        <a href={"/Blog"}>Blog</a>
        <a href={"/IcareSertleri"}>IcareSertleri</a>
        </div>

        <div className="Icon-Paage">

        <div onClick={()=>{
            setMenu(!Menu)
        }} className="icon ">
        <i class="fa-solid fa-bars"></i>
        </div>
        <Stack flexDirection={'row'} gap={2}>
            <Typography>Az</Typography>
            <Typography>Ru</Typography>
            <Typography>En</Typography>
        </Stack>
            </div>
            </Container>
        </Box>
        </>
    )}

export default Navbar