import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from "react-native";
import {Tooltip} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {registerUserAsync} from "../../services/auth.service";

const RegisterScreen = ({navigation}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [checked, setChecked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <View style={styles.main}>
            <View style={styles.row}>
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
                {(!login && checked) && <Tooltip
                    popover={<Text>Provide login!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    clearButtonMode="while-editing"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                {(!password && checked) && <Tooltip
                    popover={<Text>Provide password!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    clearButtonMode="while-editing"
                    textContentType="email"
                    autoCapitalize="none"
                />
                {(!validateEmail(email) && checked) && <Tooltip
                    popover={<Text>Provide correct email!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="First name"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    clearButtonMode="while-editing"
                    textContentType="name"
                />
                {(!firstName && checked) && <Tooltip
                    popover={<Text>Provide first name!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Last name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    clearButtonMode="while-editing"
                    textContentType="familyName"
                />
                {(!lastName && checked) && <Tooltip
                    popover={<Text>Provide last name!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Address"
                    value={address}
                    onChangeText={text => setAddress(text)}
                    clearButtonMode="while-editing"
                    textContentType="fullStreetAddress"
                />
                {(!address && checked) && <Tooltip
                    popover={<Text>Provide address!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Country"
                    value={country}
                    onChangeText={text => setCountry(text)}
                    clearButtonMode="while-editing"
                    textContentType="countryName"
                />
                {(!country && checked) && <Tooltip
                    popover={<Text>Provide country!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                    clearButtonMode="while-editing"
                    textContentType="telephoneNumber"
                />
                {(!country && checked) && <Tooltip
                    popover={<Text>Provide phone number!</Text>}
                    withOverlay={false}
                    backgroundColor="pink"
                >
                    <Icon name="error" size={35} color="red"/>
                </Tooltip>}
            </View>
            <TouchableOpacity
                onPress={async () => {
                    const data = {
                        login,
                        password,
                        email,
                        firstName,
                        lastName,
                        address,
                        country,
                        phoneNumber
                    };
                    setChecked(true);
                    if(await registerUserAsync(data)) {
                        navigation.goBack();
                    }
                }}
                style={styles.register}
            >
                <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
                style={{...styles.register, backgroundColor: 'red', borderColor: 'red'}}
            >
                <Text style={styles.registerText}>CANCEL</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
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
    register: {
        backgroundColor: 'black',
        width: 200,
        height: 40,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 15,
        margin: 5
    },
    registerText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'System'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})

export default RegisterScreen;
