
import { useContext, useState } from "react"
import { AccountContext } from "../../../context/AccountProvide"
import { Box, styled } from "@mui/material";
import {Chat as MessageIcon,MoreVert,HistoryToggleOff} from '@mui/icons-material'

import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";


const Component = styled(Box)`
    height:45px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;

`;

const Wrapper = styled(Box)`
    margin-left:auto;
    & > *{
        margin-left:2px;
        padding:8px;
        color:#000;
    };
    & :first-child{
        // font-size:22px;
        margin-right:8px;
        margin-top:3px;
    }
`

const Profile = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'
})

const Header =()=>{
    const[openDraw,setOpenDraw] = useState(false)

    const {account} = useContext(AccountContext);

    const toggleDrawer = ()=>{
        setOpenDraw(true)
    }
    // console.log(account);
    return(
        <>
        <Component>
            <Profile src={account.picture} alt="dp" onClick={()=>toggleDrawer()} />
            <Wrapper>
                <HistoryToggleOff/>
                <MessageIcon/>
                <HeaderMenu setOpen = {setOpenDraw}/>
            </Wrapper>
        </Component>
        <InfoDrawer open = {openDraw} setOpen = {setOpenDraw} profile={true}/>
        </>
    )
}
export default Header