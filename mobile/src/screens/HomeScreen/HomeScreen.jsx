import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import TabSwitcher from "../../components/TabSwitcher";
import {SafeAreaView} from "react-native";
import Login from "../../components/Login";
import {getSecurityTokenAsync} from "../../services/auth.service";

const HomeScreen = ({navigation, route}) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
            const checkToken = async () => {
                const securityToken = await getSecurityTokenAsync();
                if (securityToken) {
                    setToken(securityToken);
                }
            };
            checkToken();
        },[token]);

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {token ? <TabSwitcher/> : <Login setToken={setToken}/> }
        </SafeAreaView>
    )
}

export default HomeScreen;
