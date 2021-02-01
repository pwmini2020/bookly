import React, {useEffect} from 'react';
import {SafeAreaView} from "react-native";
import Login from "../../components/Login";
import TabSwitcher from "../../components/TabSwitcher";
import {getSecurityTokenAsync} from "../../services/auth.service";
import tokenState from "../../state";

const HomeScreen = ({navigation, route}) => {
    const [token, setToken] = tokenState.use();

    useEffect(() => {
        const checkToken = async () => {
            const securityToken = await getSecurityTokenAsync();
            if (securityToken) {
                setToken(securityToken);
            }
        };
        //TODO: uncomment once backend is ready.
        //checkToken();
    }, [token]);

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {token ? <TabSwitcher/> : <Login/>}
        </SafeAreaView>
    )
}

export default HomeScreen;
