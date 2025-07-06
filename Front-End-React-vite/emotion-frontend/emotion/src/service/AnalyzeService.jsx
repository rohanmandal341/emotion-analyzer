import axios from 'axios';

const BASE_URL = "http://localhost:54517/api/mental";
export const create = async (text) => {
    const response = await axios.post(BASE_URL,text,{
        headers:{
            'Content-Type':'application/json',
        },
    });
    return response.data;
}