import {API_URL, API_V} from '@env';
import {fetchWithToken} from "../helpers/http.helper";
import {loginState} from "../state";

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
    return await fetchWithToken(`${queryString(page, login)}&type=room`, {method: 'GET'});
}

export const getParkingsBookingPageAsync = async (page= 0, login) => {
    return await fetchWithToken(`${queryString(page, login)}&type=parking`, {method: 'GET'});
}


