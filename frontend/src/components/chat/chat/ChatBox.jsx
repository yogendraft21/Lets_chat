import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer"
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvide";
import { getConversation } from "../../../services/api";


const ChatBox = ()=>{
    const {person,account} = useContext(AccountContext)

    const [chat, setChat] = useState({})

    useEffect(()=>{
        const getConversationDetails = async()=>{
            const data = await getConversation({senderId:account.sub,receiverId:person.sub})

            setChat(data)
        }
        getConversationDetails();
      },[person.sub])
    
    return (
        <Box>
            <ChatHeader person={person}/>
            <Messages person={person} chat={chat}/>
            
        </Box>
    )
}

export default ChatBox;