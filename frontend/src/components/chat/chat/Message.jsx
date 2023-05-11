import { Box, Typography, styled} from '@mui/material'
import React, { useContext } from 'react'
import { formatDate } from '../../../utils/common-utils'
import { AccountContext } from '../../../context/AccountProvide'


const Send = styled(Box)`
background: #dcf8c6;
padding: 5px;
max-width: 60%;
width: fit-content;
margin-left: auto;
display: flex;
border-radius: 10px;
word-break: break-word;
`
const Wrapper = styled(Box)`
background: #FFFFFF;
padding: 5px;
max-width: 60%;
width: fit-content;
display: flex;
border-radius: 10px;
word-break: break-word;
`

const Text = styled(Typography)`

    font-size:14px;
    padding:0 25px 0 5px;
`
const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`

const Message = ({message}) => {

    const {account} = useContext(AccountContext)
  return (
    <>
        {
            account.sub === message.senderId ? 
                <Send>
                 <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                 </Send>
            :
            <Wrapper>
            <Text>{message.text}</Text>
               <Time>{formatDate(message.createdAt)}</Time>
            </Wrapper>
        }
    </>
     
  )
}

export default Message