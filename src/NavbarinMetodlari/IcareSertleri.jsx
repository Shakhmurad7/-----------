import { Button, Container, Typography , Box } from "@mui/material"
import PageContainer from "../Page/PageContainer"
import { useState } from "react"

const IcareSertleri =()=>{
    const [open , setopen] = useState(false)
    return(
        <>
        <PageContainer>
            <Container >
                <Box my={10}>
                    <Typography my={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iste, exercitationem quo animi enim atque. Optio, ullam at! Voluptate harum nisi doloribus aspernatur delectus reprehenderit laudantium alias expedita, quisquam nesciunt!</Typography>
                    <Button onClick={()=> setopen(true)} sx={{py:'10px'}}variant="contained">Sekile bax</Button>
                    {
                        open && <div className="openimge">
                        <div className="openimg">
                        <img width={'200px'} height={'200px'} src="../public\imgekatiqori\eskavatir.2.png"/>
                        <button onClick={()=>setopen(false)} className="close">x</button>
                        </div>
                        <div style={{width:'300px'}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis enim ad aliquid assumenda corporis accusamus fugiat tenetur asperiores optio? <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod blanditiis reprehenderit, possimus quasi nisi repellendus architecto consectetur beatae, labore id enim ab expedita ducimus maiores. Et perferendis dolores molestiae!
                            </p>
                        </div>
                        </div>
                    }
                </Box>
            </Container>
        </PageContainer>
        </>
    )
}
export default IcareSertleri