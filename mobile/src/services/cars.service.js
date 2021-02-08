import {fetchWithToken} from "../helpers/http.helper";
import {API_URL, API_V, PAGE_SIZE} from "@env";

export const getCarsAsync = async (params, page=0) => {
    params.date = params.date.toString().slice(0,-4);
    return await fetchWithToken(
        `${API_URL}/v${API_V}/external/cars?location=${params.location}&model=${params.carType}&page=${page}&size=${PAGE_SIZE}`
    ).then((response) => response.json())
        .then(json => {
             return json.filter((obj) => obj.free.length > 0);
        })
}
