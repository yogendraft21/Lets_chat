import axios from 'axios'


const url='http://localhost:8081';
export const addUser = async(data)=>{
    try {
       await axios.post(`${url}/add`,data);
    } catch (error) {
        console.log('Add user API',error);
    }
}

export const getUsers  =async()=>{
    try {
        const res = await axios.get(`${url}/users`)
        // console.log(res);
        return res.data;

    } catch (error) {
        console.log("error in get users",error.message);
    }
}

export const setConversation = async(data)=>{
    try {
        const res  =await axios.post(`${url}/conversation/add`,data);
    } catch (error) {
        console.log("error while calling setConversation",error.message);
    }
}
export const getConversation = async(data)=>{
    try {
        const res  =await axios.post(`${url}/conversation/get`,data);

        return res.data;
    } catch (error) {
        console.log("error while calling getConversation",error.message);
    }
}

export const newMessage = async(data)=>{
    try {
        await axios.post(`${url}/message/add`,data);
    } catch (error) {
        console.log('error in new message',error.message);
    }
}

export const getMessage = async(id)=>{
    try{
        let res = await axios.get(`${url}/message/get/${id}`)
        return res.data;
    }catch(error){
        console.log('getting messages error',error.message);
    }
}

export const UploadFile = async(data)=>{
    try {
        return await axios.post(`${url}/file/upload`,data)
    } catch (error) {
        console.log('error in file uploading',error.message);
    }
}