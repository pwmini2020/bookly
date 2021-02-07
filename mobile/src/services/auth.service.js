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
   tokenState.set(token);
   if(token) {
       successToast('You have successfully logged in!');
       loginState.set(credentials.login);
   }
   else {
       errorToast('Some login problem.');
   }
}

export const logoutUserAsync = async () => {
    await removeItemAsync(TOKEN_STRING);
    tokenState.reset();
    loginState.reset();
    successToast('You successfully logged out.')
}

export const tryRestoreUserAsync = async () => {
    const token = await getItemAsync(TOKEN_STRING);
    if (token) {
        tokenState.set(token);
        successToast('Successfully restored last session...');
    }
}
