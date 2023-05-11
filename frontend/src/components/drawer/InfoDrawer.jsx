
import { Box, Drawer, Typography, styled } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Header = styled(Box)`
    background-color:#008069;
    height:107px;
    color:#ffffff;
    display:flex;
    & > svg, & > p{
        margin-top:auto;
        padding:15px;
        font-weight:600;
    }
`

const Text = styled(Typography)`
    font-size:18px;
`

const Component = styled(Box)`
    background:#ededed;
    height:85%;
`

const DrawStyle = {
    left : 19,
    top:16,
    height:'95.5%',
    width:'29.8%',
    boxShadow:'none'
}

const InfoDrawer = ({open,setOpen})=>
{
    const handleClose = ()=>{
        setOpen(false)
    }
    
    return(
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{sx : DrawStyle}}
      style={{zIndex:1500}}
    //   hideBackdrop={true}
    >
        <Header>
            <ArrowBack onClick= {()=> setOpen(false)}/>
            <Text>Profile</Text>
        </Header>
        <Component>
            <Profile/>
        </Component>
    </Drawer>
    )
}

export default InfoDrawer;