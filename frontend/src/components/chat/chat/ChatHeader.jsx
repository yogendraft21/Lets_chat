import { Box, Typography, styled } from "@mui/material"
import { Search, MoreVert, VideoCall } from "@mui/icons-material"
import { defaultProfilePicture } from "../../constraint/data"


const Header = styled(Box)`
    height:44px;
    background-color:#ededed;
    padding:8.5px 16px;
    display:flex;
    align-items:center;

`
const Image  = styled('img')({
    height:40,
    width:40,
    objectFit:'cover',
    borderRadius:'50%'
});

const Name = styled(Typography)`
    margin-left : 12px !important;
`
const Status = styled(Typography)`
    margin-left : 12px !important;
    font-size:12px;
    color:rgba(0,0,0,0.6);
`

const RightSide = styled(Box)`
    margin-left:auto;
    & > svg{
        padding:8px;
        font-size:24px;
        color:#000;
        cursor:pointer;
    }
`

const ChatHeader = ({person}) => {
  return (
    <Header>
        <Image src={person.picture} alt="" />
        <Box>
            <Name>{person.name}</Name>
            <Status>Offline</Status>
        </Box>
        <RightSide>
            <VideoCall/>
            <Search/>
            <MoreVert/>
        </RightSide>
    </Header>
  )
}

export default ChatHeader