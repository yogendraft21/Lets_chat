import { MoreVert } from "@mui/icons-material";
import {Menu,MenuItem, styled} from "@mui/material"

import {useState} from "react"
import InfoDrawer from "../../drawer/InfoDrawer";


const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 20px 5px 24px;
    color:#4a4a4a;
`
const HeaderMenu = () => {
    const [open,setOpen]=useState(null);
    const [openDraw, setOpenDraw] = useState(false);

    const handleClose = ()=>{
        setOpen(null)
    }
    const handleClick = (e)=>{
        setOpen(e.currentTarget)
    }
  return (
    <>
      <MoreVert style={{cursor:'pointer'}} onClick={handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        // getContentAnchorEL = {null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuOption onClick={()=>{handleClose(); setOpenDraw(true);}}>Profile</MenuOption>
      </Menu>
      <InfoDrawer open={openDraw} setOpen={setOpenDraw} profile={true} />
    </>
  );
};
export default HeaderMenu;
