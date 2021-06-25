import axios from 'axios';

//https://api.hgbrasil.com/weather?key=f2327e09&lat=-23.682&lon=-46.875

export const key = 'f2327e09';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;