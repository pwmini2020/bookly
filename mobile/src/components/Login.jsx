import React, {useState} from 'react';
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import {errorToast} from "../helpers/toast.helper";
import {authenticateUserAsync} from "../services/auth.service";
import tokenState from "../state";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async () => {
        if (!login.trim()) {
            errorToast("Provide login.");
            return;
        }
        if (!password.trim()) {
            errorToast("Provide password.");
            return;
        }

        const credentials = {
            login,
            password
        };

        authenticateUserAsync(credentials);
    }

    return (
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
            <TouchableOpacity onPress={async () => await logIn()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login;
