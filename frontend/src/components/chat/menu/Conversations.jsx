import { Box, Typography , styled} from "@mui/material"
import { useContext } from "react"
import { AccountContext } from "../../../context/AccountProvide"
import { setConversation } from "../../../services/api"


const Component = styled(Box)`
    display:flex;
    height:45px;
    padding:12px 0px;
    cursor:pointer;
`
const Image = styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding:'0 14px',
    objectFit:'cover'
})
const Conversations = ({user})=>{
    const {setPerson,account} = useContext(AccountContext);
    const getUser = async()=>{
        setPerson(user)
        await setConversation({senderId:account.sub,receiverId:user.sub})
    }
    return(
        <Component onClick={()=>getUser()}>
            <Box>
                <Image src={user.picture} alt="" />
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Component>
    )
}
export default Conversations