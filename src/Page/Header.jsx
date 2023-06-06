
import { Box, Container, Stack, Typography } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Header =()=>{

    return(
        <>
    <Box py={2} sx={{
        backgroundColor:`
        #FFC01F`
    }} flexWrap={'wrap'}>
        <Container>
            <Stack justifyContent={"space-between"} flexDirection={`row`}>
                <Typography>+994(12) 123 45 67  |  Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                <Stack flexDirection={'row'} gap={2} sx={{
                    cursor:`pointer`
                }}>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <FacebookIcon/>
                </Stack>
            </Stack>
            
        </Container>

    </Box>

        </>
        )
    }
export default Header
    