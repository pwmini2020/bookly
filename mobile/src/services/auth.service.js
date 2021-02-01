import AsyncStorage from '@react-native-async-storage/async-storage';
import {SECURITY_TOKEN} from '@env';
import tokenState from "../state";

export const authenticateUserAsync = async (credentials) => {
    //TODO: fetch backend (once it is actually done)
    await setSecurityTokenAsync(SECURITY_TOKEN);
    return SECURITY_TOKEN;
}

export const logoutUserAsync = async() => {
    await removeSecurityTokenAsync();
    tokenState.reset();
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
        //TODO change SEC_TOK to null, once API is ready.
        return jsonValue ? JSON.parse(jsonValue) : SECURITY_TOKEN;
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

