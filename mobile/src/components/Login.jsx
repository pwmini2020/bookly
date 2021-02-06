import React, {useState} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import {errorToast} from "../helpers/toast.helper";
import {authenticateUserAsync} from "../services/auth.service";
import bcrypt from 'react-native-bcrypt';

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

        const hash = await Promise.resolve(bcrypt.hashSync(password, 6));

        const credentials = {
            login,
            password: hash
        };

        await authenticateUserAsync(credentials);

    }

    return (
        <View>
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
        </View>
    )
}

export default Login;
