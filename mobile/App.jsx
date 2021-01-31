import React, {useState, useEffect} from "react";
import {SafeAreaView, View, Text} from "react-native";
import Toast from 'react-native-toast-message';
import { getSecurityTokenAsync } from "./src/services/auth.service";
import Login from "./src/screens/Login";
import TabSwitcher from "./src/screens/TabSwitcher";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    const Stack = createStackNavigator();

    const [token, setToken] = useState(null);

    useEffect(() => {
            const checkToken = async () => {
                const securityToken = await getSecurityTokenAsync();
                if (securityToken) {
                    setToken(securityToken);
                }
            };
            checkToken();
        }
    )

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            {token ? <View><TabSwitcher/></View> :
                <View>
                    <Text>Welcome to Bookly app!</Text>
                    <Login setToken={setToken}/>
                </View>
            }

            <Toast ref={(ref) => Toast.setRef(ref)}/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Login}/>
                    <Stack.Screen name="Details View" component={TabSwitcher}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
