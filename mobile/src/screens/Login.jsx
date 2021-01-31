import React, {useState} from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import {authenticateUserAsync} from "../services/auth.service";
import {errorToast} from "../helpers/toast.helper";

const Login = ({ setToken }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmpty, setLoginEmpty] = useState(false);
    const [passwordEmpty, setPasswordEmpty] = useState(false);

    const inputCorrect = () => {
        if(!password.trim()) {
            setPasswordEmpty(true);
        }
        if(!login.trim()) {
            setLoginEmpty(true)
        }
        return !(loginEmpty || passwordEmpty);
    }

    const logIn = () => {
        if(inputCorrect()) {
            errorToast('Please, provide login and password.');
            return;
        }

        const credentials = {
            login,
            password
        };

        authenticateUserAsync(credentials)
            .then(token => {
                if(token) {
                    setToken(token);
                }
                else {
                    errorToast('Please, provide correct login and password.')
                }
            });
    }

    return(
        <SafeAreaView>
            <TextInput
                autoFocus={true}
                placeholder="Login"
                value={login}
                onChangeText={text => setLogin(text)}
                clearButtonMode="while-editing"
                textContentType="username"
            />
            <TextInput
                placeholder={"Password"}
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
                clearButtonMode="while-editing"
                textContentType="password"
            />
            <TouchableOpacity onPress={()=>logIn()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login;
