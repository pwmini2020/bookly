import {TOKEN_STRING, API_URL, API_V} from '@env';
import {tokenState, loginState, userIdState} from "../state";
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

   const {token,id} = await response.json();
   await setItemAsync(TOKEN_STRING, token);
   await setItemAsync("id", id);
   await setItemAsync("login", credentials.login);
   tokenState.set(token);
   loginState.set(credentials.login);
   userIdState.set(id);
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
    userIdState.reset();
    successToast('You successfully logged out.')
}

export const tryRestoreUserAsync = async () => {
    const token = await getItemAsync(TOKEN_STRING);
    const login = await getItemAsync('login');
    const id = await getItemAsync('id');
    if (token) {
        tokenState.set(token);
        loginState.set(login);
        userIdState.set(id);
        successToast('Successfully restored last session...');
    }
}

export const registerUserAsync = async (data) => {
    const response = await fetch(`${API_URL}/v${API_V}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(response.ok) {
        const {securityToken, id} = await response.json();
        const login = data.login;
        // state setting
        tokenState.set(securityToken);
        loginState.set(login);
        userIdState.set(id);
        // async storage
        await setItemAsync(TOKEN_STRING, securityToken);
        await setItemAsync("login", login);
        await setItemAsync("id", id);
        // toast!
        successToast('You registered successfully!');
        return true;
    }
    else {
        errorToast('Registration failed.');
        return false;
    }
}
