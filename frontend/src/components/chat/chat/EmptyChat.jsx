
import {emptyChatImage} from '../../constraint/data'
import {Box, Typography, styled,Divider} from '@mui/material'

const Component = styled(Box)`
    background:#f8f9fa;
    padding:30px 0;
    text-align:center;
    height:100vh;
`
const Container = styled(Box)`
    pading:0 200px;
`

const Image = styled('img')({
    width:400,
    marginTop:100,
})

const Title = styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d;
`
const SubTitle = styled(Typography)`
    font-size:14px;
    color:#667781;
    font-weight:400;
    font-family:inherit;
`
const StyleDivider = styled(Divider)`
    margin:60px 0;
    opacity:0.4;
`

const EmptyChat = ()=>{
    return(
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="" />
                <Title>
                    WhatsApp Web
                </Title>
                <SubTitle>
                    Now send and receive messages without keeping your phone online
                </SubTitle>
                <SubTitle>
                    Use whatsApp on up to 4 linked devices and 1 phone at same time.
                </SubTitle>
                <StyleDivider/>
            </Container>
        </Component>
    )
}
export default EmptyChat;