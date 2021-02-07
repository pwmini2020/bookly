import {TOKEN_STRING, API_URL, API_V} from '@env';
import {tokenState, loginState} from "../state";
import {getItemAsync, removeItemAsync, setItemAsync} from "../helpers/asyncStorage.helper";
import {errorToast, successToast} from "../helpers/toast.helper";

export const authenticateUserAsync = async (credentials) => {
   const response = await fetch(`${API_URL}/v${API_V}/login`, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(credentials)
   });

   if(response.status === 401) {
       errorToast('Please, provide correct login and password.');
       return;
   }

   const {token} = await response.json();
   await setItemAsync(TOKEN_STRING, token);
   await setItemAsync("login", credentials.login);
   tokenState.set(token);
   loginState.set(credentials.login);
   if(token) {
       successToast('You have successfully logged in!');
   }
   else {
       errorToast('Some login problem.');
   }
}

export const logoutUserAsync = async () => {
    await removeItemAsync(TOKEN_STRING);
    await removeItemAsync('login');
    tokenState.reset();
    loginState.reset();
    successToast('You successfully logged out.')
}

export const tryRestoreUserAsync = async () => {
    const token = await getItemAsync(TOKEN_STRING);
    const login = await getItemAsync('login');
    if (token) {
        tokenState.set(token);
        loginState.set(login);
        successToast('Successfully restored last session...');
    }
}
