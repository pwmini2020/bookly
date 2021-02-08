import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Animated,
    Easing,
    StyleSheet
} from "react-native";
import { Audio } from 'expo-av';
import {errorToast} from "../../helpers/toast.helper";
import {authenticateUserAsync} from "../../services/auth.service";
import bcrypt from 'react-native-bcrypt';

const Login = ({navigation}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [cheat, setCheat] = useState("");
    const [sound, setSound] = useState();
    const [playing, setPlaying] = useState(false);

    // Sound playing
    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/jazz.mp3')
        );
        await setSound(sound);
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
    }
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync(); }
            : undefined;
    }, [cheat]);


    // Image rotation.
    const rotateValueHolder = useRef(new Animated.Value(0)).current;
    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.loop(
            Animated.timing(rotateValueHolder, {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    };
    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    // LogIn button functionality.
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
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'white'
        }}>
            <TextInput
                style={styles.input}
                autoFocus={false}
                placeholder="Login"
                value={login}
                onChangeText={text => setLogin(text)}
                clearButtonMode="while-editing"
                textContentType="username"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
                clearButtonMode="while-editing"
                textContentType="password"
                autoCapitalize="none"
            />
            <TouchableOpacity
                onPress={async () => await logIn()}
                style={styles.login}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={{
                    ...styles.login,
                    backgroundColor: '#909090',
                    borderColor: '#909090'
                }}
            >
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => {
                if(!playing){
                    setPlaying(true);
                    await playSound();
                    startImageRotateFunction();
                }
                else {
                    setPlaying(false);
                    rotateValueHolder.setValue(0);
                    Animated.timing(
                        rotateValueHolder
                    ).stop();
                    await sound.unloadAsync();
                }

            }}>
                <Animated.Image
                    style={{
                        ...styles.logo,
                        transform: [{rotate: rotateData}],
                    }}
                    source={require('../../../assets/logo.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
    },
    input: {
        margin: 5,
        paddingLeft: 15,
        height: 40,
        width: 200,
        borderColor: '#000000',
        borderWidth: 4,
        borderRadius: 15
    },
    login: {
        backgroundColor: 'black',
        width: 200,
        height:40,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 15,
        margin: 5
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'System'
    }
});

export default Login;
