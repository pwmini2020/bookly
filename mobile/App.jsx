import React from "react";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import {logoutUserAsync} from "./src/services/auth.service";
import {tokenState, loginState} from "./src/state";
import { LogBox, YellowBox } from 'react-native';
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import HistoryScreen from "./src/screens/HistoryScreen/HistoryScreen";
import DetailsScreen from "./src/screens/DetailsScreen/DetailsScreen";
import * as RootNavigation from './src/helpers/navigation.heper';

const toastConfig = {
    success: ({ text1, text2, props, ...rest }) => (
        <View style={{
            width: '80%',
            backgroundColor: 'white',
            borderColor: 'green',
            borderRadius: 15,
            borderWidth: 2,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{
                height: '100%',
                width: '10%',
                backgroundColor: 'green',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10
            }}><></></View>
            <View style={{
                width: '80%',
                marginLeft: 15,
                paddingVertical: 5
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'green'
                }}>{text1}</Text>
                <Text style={{
                    fontSize: 15,
                    color: '#909090'
                }}>{text2}</Text>
            </View>
        </View>
    ),
    error: ({text1, text2, props, ...rest}) => (
        <View style={{
            width: '80%',
            backgroundColor: 'white',
            borderColor: 'red',
            borderRadius: 15,
            borderWidth: 2,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{
                height: '100%',
                width: '5%',
                backgroundColor: 'red',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10
            }}><></></View>
            <View style={{
                width: '85%',
                marginLeft: 15,
                paddingVertical: 5
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'red'
                }}>{text1}</Text>
                <Text style={{
                    fontSize: 15,
                    color: '#909090'
                }}>{text2}</Text>
            </View>
        </View>
    )
};


export default function App() {
    const Stack = createStackNavigator();

    const token = tokenState.useValue();

    const appEnv = process.env.APP_ENV;

    const logoutButton = () => (token ?
            <TouchableOpacity
                onPress={() => {
                    logoutUserAsync().then(() => RootNavigation.navigate("Home"));

                }}
            >
                <Icon name="exit" size={35} color="#000000"/>
            </TouchableOpacity> : <></>
    );

    React.useEffect(() => {
        switch (process.env.APP_ENV) {
            case 'staging':
                YellowBox.ignoreWarnings([""]);
                return;
            case 'production':
                YellowBox.ignoreWarnings([""]);
                LogBox.ignoreAllLogs(true);
                return;
        }
    })

    return (
        <NavigationContainer ref={RootNavigation.navigationRef}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{
                                  headerShown: true,
                                  headerTitle: (
                                      `Bookly${appEnv !== 'production' ? `[${appEnv}] - ${loginState.useValue()}` : ""}`
                                  ),
                                  headerStyle: {...styles.headerStyle},
                                  headerTitleAlign: "center",
                                  headerRight: logoutButton
                              }}
                />
                <Stack.Screen name="Register" component={RegisterScreen} options={{
                    headerTitle: ''
                }}/>
                <Stack.Screen name="History" component={HistoryScreen} options={{
                    headerTitle: 'Bookings history',
                    headerRight: logoutButton,
                    headerTitleAlign: "center",
                    headerShown: true,
                    headerStyle: {...styles.headerStyle}
                }}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{
                    headerTitle: '',
                    headerRight: logoutButton,
                    headerShown: true,
                    headerStyle: {...styles.headerStyle}
                }}/>
            </Stack.Navigator>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)}/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        elevation: 0
    },
})
