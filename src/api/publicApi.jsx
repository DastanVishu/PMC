import BaseApi from "./baseApi";

const appointmentsdata = async () => {
    return await BaseApi({
        url: "/appointmentsdata",
        method: "get"
    })
}

export {appointmentsdata}