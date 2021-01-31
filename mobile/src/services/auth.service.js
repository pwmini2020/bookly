import AsyncStorage from '@react-native-async-storage/async-storage';
import {SECURITY_TOKEN} from '@env';

export const authenticateUserAsync = async (credentials) => {
    //TODO: fetch backend (once it is actually done)
    await setSecurityTokenAsync(SECURITY_TOKEN);
    return SECURITY_TOKEN;
}

export const setSecurityTokenAsync = async (token) => {
    try {
        await AsyncStorage.setItem('@security_token', token)
    } catch (e) {
        // saving error
    }
}

export const getSecurityTokenAsync = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@security_token');
        if(!jsonValue || SECURITY_TOKEN) {

        }
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // saving error
    }
}

export const removeSecurityTokenAsync = async () => {
    try {
        await AsyncStorage.removeItem('@security_token');
    } catch (e) {
        // saving error
    }
}

