import { Container, Grid, Typography , Paper , Box, Stack, Button } from "@mui/material"
import PageContainer from "../Page/PageContainer"
const Mehsul =[
    {
        title:`Eskavator`,
        id: 1,
        year:2022 ,
        img:'eskavatir.2.png',
        priceday:100,
        pricemonth:1000
    },
    {
        title:`Ekskavator yükləyici`,
        id: 2,
        year:2022 ,
        img:'kran.png',
        priceday:100,
        pricemonth:1000
    },
    {
        title:`Avtokran`,
        id: 3,
        year:2022 ,
        img:'traktir.png',
        priceday:100,
        pricemonth:1000
    },
    {
        title:`Forkliftlər`,
        id: 4,
        year:2022 ,
        img:'yukgotureb.png',
        priceday:100,
        pricemonth:1000
    },
    {
        title:`Ekskavator`,
        id: 5,
        year:2022 ,
        img:'eskavatir.2.png',
        priceday:100,
        pricemonth:1000
    },
    {
        title:`Ekskavator yükləyici`,
        id: 6,
        year:2022 ,
        img:'kran.png',
        priceday:100,
        pricemonth:1000
    },
    {
        title:`Avtokran`,
        id: 7,
        year:2022 ,
        img:'traktir.png',
        priceday:100,
        pricemonth:1000
    },
    {
        title:`Forkliftlər`,
        id: 8,
        year:2022 ,
        img:'yukgotureb.png',
        priceday:100,
        pricemonth:1000
    },
]
const Texnilkalar =()=>{
    return(
        <>
        <PageContainer>
            <Container sx={{pt:'30px'}}>
                <Typography textAlign={'center'} variant="h3" component={'h3'}>Texnikalar</Typography>
            </Container>
        <Container>

        <Grid container spacing={3} my={5}>

            {
                Mehsul.map(({title , year , id, priceday , pricemonth , img})=>{
                    return(
                        <Grid item xs={12} sm ={6} md={4} lg={3}>
                            <Paper elevation={7} sx={{height:'100%'}} >
                                <img style={{width:`100%`}} src={`../public/imgekatiqori/${img}`} />
                                <Box px={2}>
                                <Typography fontWeight={'bold'}>Mehsulun adi</Typography>
                                <Typography>{title}</Typography>
                                <Typography color={'grey'}>{year}</Typography>
                                </Box>
                                <Stack textAlign={'end'} px={2} color={'#FFC01F'}>
                                    <Typography>{priceday} Azn/Gun</Typography>
                                    <Typography>{pricemonth} Azn/Ay</Typography>
                                </Stack>
                                <Box py={2} textAlign={'center'}>
                                    <Button sx={{backgroundColor:`gold` , color:'black'}} variant="contained">Icare etmek </Button>
                                </Box>

                            </Paper>
                        </Grid>
                    )
                })
            }

            </Grid>
        </Container>
        </PageContainer>
        </>
    )
}
export default Texnilkalar