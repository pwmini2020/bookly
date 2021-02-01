import React, {useState} from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import {authenticateUserAsync} from "../services/auth.service";
import {errorToast} from "../helpers/toast.helper";

const Login = ({ setToken }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const logIn = () => {
       if(!login.trim()) {
           errorToast("Provide login.");
           return;
       }
       if(!password.trim()) {
           errorToast("Provide password.");
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
            <Text>Welcome to Bookly app!</Text>
            <TextInput
                autoFocus={false}
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
