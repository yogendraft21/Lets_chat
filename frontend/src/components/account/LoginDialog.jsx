import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvide";
import { Box, Dialog, Typography, List,ListItem,styled } from "@mui/material";

import { qrCodeImage } from "../constraint/data";
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { addUser } from "../../services/api";

const Component = styled(Box)`
    display:flex;
`;
const Container = styled(Box)`
    padding:56px 0 56px 56px;
`;

const Qrcode = styled('img')({
    height:250,
    width:250,
    margin:'50px 0 0 50px'
})

const Title = styled(Typography)`
    font-size:25px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:20px;
`;
const StyledList = styled(List)`
    & > li{
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
        color:#4a4a4a;
    }
`;
const dialogStyle = {
    height:'96%',
    marginTop:'15%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
    
}

const LoginDialog = ()=>{

    const {setAccount}  = useContext(AccountContext)
    const onLoginSuccess = async(data)=>{
        const decoded = jwt_decode(data.credential);
        setAccount(decoded);
        await addUser(decoded)
    }
    const onLoginError = ()=>{

    }


    return(
        <Dialog
        open={true}
        PaperProps={{sx: dialogStyle}}
        hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To use whatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. open whatsaApp on your phone</ListItem>
                        <ListItem>2. Tap menu setting adn select whatsApp web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <Qrcode src={qrCodeImage} alt="QR Code"/>
                    <Box style={{position: 'absolute', top:'50%',transform:'translate(25%)',}}>
                        <GoogleLogin

                            onSuccess={onLoginSuccess}
                            onError={onLoginError}                  
                        
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog