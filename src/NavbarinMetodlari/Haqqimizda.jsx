import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import PageContainer from "../Page/PageContainer"

const Haqqimizda =()=>{
    return(
        <>
        <PageContainer>
            <Container sx={{mt:'40px' , mb:'40px'}}>
               <Stack alignItems={'center'}>
                <Box textAlign={'center'} maxWidth={'450px'}>
                    <Typography sx={{color:'#596C72'}} fontWeight={'bold'} fontSize={{xs:'2rem' , lg:'4rem'}}>megaTexnika</Typography>
                    <Typography  my={1} sx={{color:'#FFC01F'}}>Haqqimizda</Typography>
                    <Box mx={4}>
                        <Typography mx={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur repellat vitae, voluptas vel, suscipit dolore error quas laudantium</Typography>
                    </Box>
                    
                </Box>
               </Stack>
            </Container>

            <Container>
                <Paper elevation={7} sx={{p:'5px'}}>   
                <img style={{width:'100%' , maxHeight:'400px' , objectFit:'cover' , objectPosition:'center' }} src="..\public\imge\eskavatir.png"/>
                </Paper>
            </Container>

            <Container sx={{py:'120px'}}>
                <Grid container  >
                    <Grid item xs={0} lg={5} alignSelf={'flex-end'} display={{xs:'none' , md:'unset'}}>
                        <Paper elevation={5} sx={{p:'5px' , width:'70%'}}>
                            <img style={{width:'100%' , maxHeight:'500px'}} src="../public\imge\miniyukgoturen.png"/>
                        </Paper>
                    </Grid>
                     <Grid item xs={12} lg={7}>
                        <Paper elevation={5} sx={{p:'5px'}}>
                            <img style={{width:'100%'}} src="../public\imge\boyukkamaz.png"/>
                        </Paper>
                        <Box m={3}>
                            <Typography variant="h3" component={'h3'}>Mega Texnika-da sınaqdan keçirilmiş texnikalar</Typography>
                            <Typography my={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo ullam veniam, enim nihil similique voluptatibus modi eaque in? Tempora maiores labore, nihil doloremque error eos quibusdam dolorem? Sapiente, id.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container spacing={3} alignItems={'center'} mb={5} >
                    <Grid item xs={12} lg={6}>
                        <Box px={{xs:'20px'}}>
                            <Typography variant="h3" component={'h3'}>Niyə bizi seçməlisiniz</Typography>
                            <Typography pr={10} my={1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledIt is a long established fact that a reader  
                            <br></br>
                            <br></br>
                             distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                            <img style={{maxWidth:'100%' , maxHeigth:'100%'}} src="../public\imge\image 8.png" />
                    </Grid>

                </Grid>
            </Container>
        </PageContainer>
        </> 
    )
}
export default Haqqimizda