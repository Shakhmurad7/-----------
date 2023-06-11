import { Container, Stack, Typography, Box} from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer =()=>{
    return(
<Box py={6} px={2}  sx={{
background: "rgb(255,221,221)" ,
background: "linear-gradient(90deg, rgba(255,221,221,0.8127626050420168) 1%, rgba(237,231,231,1) 34%, rgba(255,97,70,0.21332282913165268) 100%)"
} }>

            <Container >
                <Stack flexDirection={'row'}  gap={10} flexWrap={'wrap'}>
                     <Typography component={'h2'} variant="h2" color={'#596C72'} fontWeight={'700'}>Logo</Typography>
                     <Stack flexDirection={'row'} gap={8} >

                        <Box>
                            <Typography> Haqqımızda</Typography>  
                            <Typography> Texnikalar</Typography>  
                            <Typography> şərtləri</Typography>  
                            <Typography> Blog</Typography>  
                            <Typography> Əlaqə</Typography>  
                        </Box>
                        <Box>
                           <Typography>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography> 
                           <Typography>+994(51) 123 45 67</Typography> 
                           <Typography>+994(12) 123 45 67</Typography> 
                           <Typography>info@lmegatexnika.az</Typography> 
                        </Box>
                     </Stack>
                     <Box>
                        <Typography>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
                        <Stack flexDirection={'row'} gap={3} py={1}>
                            <TwitterIcon/>
                           <a href="https://www.instagram.com/_shakhmurad_/"><InstagramIcon/></a>   
                            <FacebookIcon/>
                        </Stack>
                     </Box>
                </Stack>
                <Stack  mt={5}flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
                    <Typography>*2023 | Send me messaj | muradb356@email.com</Typography>
                    <Typography>By The SahMurad</Typography>
                </Stack>
            </Container>   
</Box>
 
       
     
    
    )   
}
export default Footer