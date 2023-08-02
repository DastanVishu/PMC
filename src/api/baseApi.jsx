import axios from "axios";

const BaseApi = async (options) => {
    // let token = "";
    let authHeader = "";
    // if(token) authHeader = `Bearer ${token}`;

    const client = axios.create({
        baseURL: "https://popularmaternitycentre.com/api",
        headers: {authorization: authHeader}
    });

    return client(options)
    .then(response => {
        return response.data;
    })

}

export default BaseApi;