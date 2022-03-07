import axios from 'axios';

export const baseUrl = 'https://bayout.p.rapidapi.com';

export const fetchApi = async (url) => {


    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6f1801d40amshb322267b816a2b5p1920a4jsn95e31d2e9755'
          }         
    });
    return data;
}

