

import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material'
import { Box, InputBase, styled} from '@mui/material'
import React, { useState,useEffect } from 'react'
import { UploadFile } from '../../../services/api'

const Container = styled(Box)`
    height:55.5px;
    background:#ededed;
    display:flex;
    width:100%;
    align-items:center;
    padding:0 15px;
    & > *{
        margin:5px;
        color:#909090;
    }
`
const Search = styled(Box)`
    background-color:#ffffff;
    border-radius:18px;
    width:calc(94% - 100px);
`
const InputField = styled(InputBase)`
    width:100%;
    height:20px;
    padding:20px;
    padding-left:25px;
    font-size:14px;
`
const Clip = styled(AttachFile)`
    transform:rotate(40deg);
`
const Footer = ({sendText,setValue,value,file,setFile}) => {

    
    useEffect(()=>{
        const getImage = async()=>{
            if(file){
                const data = new FormData();
                data.append('name',file.name)
                data.append('file',file)

                await UploadFile(data)
            }
            getImage()
        }
    },[])
    const onFileChange = (e)=>{
        setFile(e.target.files[0])
        setValue(e.target.files[0].name)
    }    

    return (
    <Container>
        <EmojiEmotionsOutlined/>
        <label htmlFor='fileInput'>
        <Clip/>
        </label>
        <input type='file' id='fileInput' style={{display:'none'}}
        onChange={(e)=>onFileChange(e)}
        />
        <Search>
            <InputField
            placeholder='Type a message'
            onChange={(e)=>setValue(e.target.value)}
            onKeyPress={(e)=>sendText(e)}
            value={value}
            
            />
        </Search>
        <Mic/>
    </Container>
  )
}

export default Footer