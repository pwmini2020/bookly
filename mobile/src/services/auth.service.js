import AsyncStorage from '@react-native-async-storage/async-storage';
import {SECURITY_TOKEN, TOKEN_STRING} from '@env';
import tokenState from "../state";
import {getItemAsync, removeItemAsync, setItemAsync} from "../helpers/asyncStorage.helper";
import {errorToast} from "../helpers/toast.helper";

export const authenticateUserAsync = async (credentials) => {
    //TODO: fetch backend (once it is actually done)
    let token = null;
    if(process.env.APP_ENV === 'development') {
        token = SECURITY_TOKEN;
    }
    if(token) {
        await setItemAsync(TOKEN_STRING, token);
        tokenState.set(token);
    }
    else {
        errorToast('Please, provide correct login and password.');
    }
}

export const logoutUserAsync = async () => {
    await removeItemAsync(TOKEN_STRING);
    tokenState.reset();
}

export const tryRestoreUserAsync = async () => {
    const token = await getItemAsync(TOKEN_STRING);
    if (token) {
        tokenState.set(token);
    }
}
