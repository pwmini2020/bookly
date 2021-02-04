import React, {useEffect} from 'react';
import {SafeAreaView} from "react-native";
import Login from "../../components/Login";
import TabSwitcher from "../../components/TabSwitcher";
import tokenState from "../../state";

const HomeScreen = ({navigation, route}) => {
    const token = tokenState.useValue();

    useEffect(() => {
        //TODO: uncomment once backend is connected.
        //tryRestoreUserAsync();
    }, [token]);

    return (
        <SafeAreaView style={{
            flex: 1,
//            justifyContent: "center",
//            alignItems: "center",
        }}>
            {!token ? <TabSwitcher/> : <Login/>}
        </SafeAreaView>
    )
}

export default HomeScreen;
