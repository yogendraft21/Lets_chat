import { Box, Dialog, styled } from "@mui/material"

import Menu from "./menu/Menu"
import EmptyChat from "./chat/EmptyChat"
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvide";


const Component = styled(Box)`
  display:flex;
`;
const LComponent = styled(Box)`
  min-width:450px;
`;
const RComponent = styled(Box)`
  width:73%;
  min-width:300px;
  height:100%;
  border-left:1px solid rgba(0,0,0,0.14);
`;


const dialogStyle = {
  height:'96%',
  margin:'20px',
  width:'100%',
  maxWidth:'100%',
  maxHeight:'100%',
  borderRadius:'0px',
  boxShadow:'none',
  overflow:'hidden'
  
}
const ChatDialog = ()=>{
    const {person} = useContext(AccountContext)
      return(
        <Dialog
        open={true}
        PaperProps={{sx: dialogStyle}}
        hideBackdrop={true}
        maxWidth={'md'}
        >
          <Component>
            <LComponent>
                <Menu/>
            </LComponent>
            <RComponent>
            {
                        Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
                    }
            </RComponent>
          </Component>
        </Dialog>
      )
}
export default ChatDialog