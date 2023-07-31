import axios from "axios";
import {API_URL} from '@env';

const BaseApi = async (options) => {
    // let token = "";
    let authHeader = "";
    // if(token) authHeader = `Bearer ${token}`;

    const client = axios.create({
        baseURL: API_URL,
        headers: {authorization: authHeader}
    });

    return client(options)
    .then(response => {
        return response.data;
    })

}

export default BaseApi;