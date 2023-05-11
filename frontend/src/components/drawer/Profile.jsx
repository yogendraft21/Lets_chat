import { Box, Typography, styled } from "@mui/material"
import { useContext } from "react";

import { AccountContext } from '../../context/AccountProvide'

const ImageCont = styled(Box)`
    display:flex;
    justify-content:center;
`

const AccountWrap = styled(Box)`
    background-color:#fff;
    padding:12px 30px 2px;
    box-shadow:0px 1px 3px rgba(0,0,0,0,08);
    & :first-child{
        font-size:13px;
        color:#009668;
        font-weight:200;
    }
    & :last-child{
        margin:14px 0px;
        color:#4a4a4a;
    }
`;

const DescriptionCont = styled(Box)`
    padding:15px 20px 28px 30px;
    & > p{
        font-size:14px;
        color:#8696a0;
    } 

`

const Image = styled('img')({
    width:200,
    height:200,
    borderRadius:'50%',
    padding:'25px 0'

})
const Profile = ()=>{
    const {account} = useContext(AccountContext)
    return(
        <>
            <ImageCont>
              <Image src={account.picture} alt="dp" />  
            </ImageCont>
            <AccountWrap>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </AccountWrap>
            <DescriptionCont>
                <Typography>
                    This is your username or pin. This will b visivle to your whatsApp contacts
                </Typography>
            </DescriptionCont>
            <AccountWrap>
                <Typography>
                    About
                </Typography>
                <Typography>
                    Eat Sleep Repeat
                </Typography>
            </AccountWrap>
        </>
    )
}
export default Profile