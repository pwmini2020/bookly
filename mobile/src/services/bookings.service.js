import {API_URL, API_V} from '@env';
import {fetchWithToken} from "../helpers/http.helper";
import {successToast} from "../helpers/toast.helper";

const queryString = (page, login) => {
    return `${API_URL}/v${API_V}/bookings?page=${page}&owner=${login}`
}

export const getBookingsPageAsync = async (page = 0, login) => {
    return await fetchWithToken(queryString(page, login), {method: 'GET'});
}

export const getCarsBookingsPageAsync = (page= 0, login) => {
    return fetchWithToken(`${queryString(page, login)}&type=car`, {method: 'GET'});
}

export const getFlatsBookingPageAsync = async (page= 0, login) => {
    return fetchWithToken(`${queryString(page, login)}&type=room`, {method: 'GET'});
}

export const getParkingsBookingPageAsync = async (page= 0, login) => {
    return fetchWithToken(`${queryString(page, login)}&type=parking`, {method: 'GET'});
}

export const deleteBookingAsync = async (id) => {
    return fetchWithToken(`${API_URL}/v${API_V}/bookings/${id}`, {method: 'DELETE'});
}

export const createBookingAsync = async (params) => {
    const date = new Date(params.date);
    const fromDate = date.toISOString().slice(0,-5);
    date.setDate(date.getDate() + 1);
    const toDate = date.toISOString().slice(0,-5);
    const body ={
        userId: params.userId,
        itemId: params.itemId,
        fromDate: fromDate,
        toDate: toDate,
        itemType: params.itemType
    };
    return fetchWithToken(`${API_URL}/v${API_V}/bookings/reservations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}


