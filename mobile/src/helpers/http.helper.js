import {TOKEN_STRING} from '@env';
import {getItemAsync} from "./asyncStorage.helper";

export const fetchWithToken = async (url, options = {}) => {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'Security-Token': await getItemAsync(TOKEN_STRING)
        }
    });
}
