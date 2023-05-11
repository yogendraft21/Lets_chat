import { Box, styled} from "@mui/material"
import Footer from "./Footer"
import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../../../context/AccountProvide"
import { getMessage, newMessage } from "../../../services/api"
import Message from "./Message"

const Wrapper = styled(Box)`
    background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size:50%;
`

const Component = styled(Box)`
   height:80vh;
   overflow-y:scroll; 
`
const Container = styled(Box)`
  padding: 2px 80px;

`
const Messages = ({person,chat}) => {
  const [value,setValue] = useState("")
  const {account} = useContext(AccountContext);
  const [messages,setMessages] = useState([])
  const [newMessageFlag, setNewMessageFlag] = useState(false)
  const [file,setFile] = useState()

  useEffect(()=>{
    const getMessageDetail = async()=>{
      let data = await getMessage(chat._id);
      setMessages(data)
    }
    chat._id && getMessageDetail();
  },[person._id,chat._id,newMessageFlag])

  const sendText = async(e)=>{
    console.log(e);
    const code = e.which;
    if(code === 13){
      // console.log("heelo");
        let message = {
          senderId:account.sub,
          receiverId:person.sub,
          chatId:chat._id,
          type:'text',
          text:value
        }
        await newMessage(message)
        setValue('')
        setNewMessageFlag(prev => !prev)
    }
   }
  
  return (
    <Wrapper>
        <Component>
          {
            messages && messages.map(message =>{
              return (
                <Container>
                  <Message message={message}/>
                </Container>
              )
            })
          }
        </Component>
        <Footer
            sendText ={sendText}
            setValue = {setValue}
            value={value}
            file={file}
            setFile={setFile}
        />
    </Wrapper>
  )
}

export default Messages