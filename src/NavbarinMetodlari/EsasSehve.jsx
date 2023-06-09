import { Grid, Typography , Container, Button, Paper, Box } from "@mui/material"
import PageContainer from "../Page/PageContainer"
import imge from '../../public/imge/eskavatir.png'
import Carusel from "../Carusel"

const card =[

    {   
        id:1, 
        title:`Eskovator`,
        img:`eskavatir.2.png`         

    },
    {   
        id:2,
        title:`Kran`,
        img:`kran.png `    

    },
    {   
        id:3,
        title:`Yukgoturen`,
        img:`yukgotureb.png`

    },
    {   
        id:4,
        title:`Traktir`,
        img:`traktir.png`

    },
    {   
        id:5,
        title:`Eskovator`,
        img:`eskavatir.2.png`

    },
    {   
        id:6,
        title:`Kran`,
        img:`kran.png`

    },
    {   
        id:7,
        title:`Yukgoturen`,
        img:`yukgotureb.png`

    },
    {   
        id:8,
        title:`Traktir`,
        img:`traktir.png`

    },
]


const EsasSehve =()=>{
    return(
        <>
        <PageContainer>
            <Container>

            <Grid container py={4} alignItems={'center'}>
                <Grid item xs={12} md={6}>
                    <Typography component={'h3'} variant="h3">Ağır texnikanızı bizdən satın alın</Typography>
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Typography>
                    <Button  sx={{
                        border:'1px solid',
                        borderRadius:'10px',
                        mt:'20px',
                        padding:'10px 40px'
                    }}>Etrafli</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={5} sx={{
                        p:'3px',
                        height:`100%`,
                    }}>
                    <img src={imge} style={{width:'100%'}}/>
                    </Paper>
                </Grid>

                </Grid>
            </Container>
            <Container>
                <Box py={2}>
                    <Typography component={'h5'} variant={'h5'} fontWeight={'600'}>Katiqoriya</Typography>
                </Box>
                <Grid container spacing={3} py={5}>

                {
                    card.map(({title , id , img})=>{
                        return <Grid key={id} item xs={12} md={4} lg={3}>
                            <Paper elevation={5}> 
                                <Typography py={2} variant="h5" component={'h5'} textAlign={'center'} fontWeight={'500'}>{title} </Typography>
                                    <img className="katiqoriimg" src={`../../public/imgekatiqori/${img}`}/>
                            </Paper>
                        </Grid>
                        
                        
                    })
                }
                </Grid>

                <Grid container my={10}>
                    <Grid item xs={0} lg={5} sx={{ display: { xs: 'none', md: 'unset' } }} justifyContent={'center'}   container alignSelf='flex-end' >
                        <Paper  elevation={5}sx={{ height:'100%', width:"350px" , padding:'10px'}} >
                            <img className="minikyukimg" src="../../public/imge/miniyukgoturen.png"/>
                        </Paper>
                    </Grid>
                    <Grid item lg={7} >
                        <Paper elevation={5} >
                        <img className="boyukkamaz" src="../../public/imge/boyukkamaz.png"/>
                        </Paper>
                        <Box mt={5} px={2}>
                              <Typography variant='h4'fontWeight={'600'} component={'h4'}>Mega Texnika-da sınaqdan keçirilmiş texnikalar</Typography>
                              <Typography my={5}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Typography>
                              <Button variant="contained">Haqqimizda</Button>
                        </Box>
                      
                    </Grid>

                </Grid>


<Carusel className="Carusel">
     {
                card.slice(0 , 4).map(({title , id , img})=>{
                return <Grid sx={{ minWidth: 250, width: '100%', maxWidth: '600px', ml:'20px'}}container py={5} flexWrap={"wrap"}>
                <Grid sx={{width:'100%'}} key={id} item xs={12} md={4} lg={3} >
                     <Paper sx={{width: '250px'
                    }} elevation={5}> 
                         <Typography py={2} variant="h5" component={'h5'} textAlign={'center'} fontWeight={'500'}>{title} </Typography>
                    <img className="katiqoriimg" src={`../../public/imgekatiqori/${img}`}/>
                </Paper>
        </Grid>
        </Grid>
        
    })
}

    </Carusel>


            </Container>
        </PageContainer>
        </>
    )
}
export default EsasSehve