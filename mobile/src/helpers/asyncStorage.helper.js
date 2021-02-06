import AsyncStorage from "@react-native-async-storage/async-storage";
import {errorToast} from "./toast.helper";

export const setItemAsync = async (key, value) => {
    try {
        await AsyncStorage.setItem(`@${key}`, value)
    } catch (e) {
        if(process.env.APP_ENV === 'development') {
            errorToast(e.message());
        }
    }
}

export const getItemAsync = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@${key}`);
        return jsonValue;
    } catch (e) {
        if(process.env.APP_ENV === 'development') {
            errorToast(e.message);
        }
    }
}

export const removeItemAsync = async (key) => {
    try {
        await AsyncStorage.removeItem(`@${key}`);
    } catch (e) {
        if(process.env.APP_ENV === 'development') {
            errorToast(e.message());
        }
    }
}
