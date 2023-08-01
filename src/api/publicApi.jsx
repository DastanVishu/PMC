import BaseApi from "./baseApi";

const appointmentsdata = async () => {
    return await BaseApi({
        url: "/appointmentsdata",
        method: "get"
    })
}

const bookAppointment = async (data) => {
    return await BaseApi({
        url: "/appointment-data",
        data: data,
        method: "post"
    })
}

export {appointmentsdata, bookAppointment}