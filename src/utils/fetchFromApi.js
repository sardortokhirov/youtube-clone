import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '0f8320bbb9msh0136c528be054b2p1bd3d5jsn5b6bb917f270',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    const {data} =
        await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}