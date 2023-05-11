
import { useEffect, useState, useContext } from "react"

import {getUsers, setConversation} from '../../../services/api'
import { Box, styled, Divider } from "@mui/material";
import Conversations from "./Conversations";

import {AccountContext} from '../../../context/AccountProvide'


const Component = styled(Box)`
    height:81vh;
    overflow:overlay;

`
const StyleDivider = styled(Divider)`

    margin: 0 0 0 70px;
    background-color:#e9edef;
    opacity:0.6;
`
const Coversation = ({text})=>{

    const [users,setUsers] = useState([])
    const {account} = useContext(AccountContext)
    useEffect(()=>{
        const fetchData = async()=>{
            let res = await getUsers();
            let filterData = res.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filterData)
        }
        fetchData();
    },[text]);
    // console.log(users);
    return(
        <Component>
            {
                users.map(user =>{
                    if(user.sub !== account.sub)
                    return( 
                      <>
                      <Conversations user={user}/>
                      <StyleDivider/>
                      </>
                    )
                })
            }
            
        </Component>
    )
}
export default Coversation