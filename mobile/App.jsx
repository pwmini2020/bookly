import React from "react";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, View, Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import {logoutUserAsync} from "./src/services/auth.service";
import tokenState from "./src/state";
import { LogBox, YellowBox } from 'react-native';
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";

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
                onPress={() => logoutUserAsync()}
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
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{
                                  headerShown: true,
                                  headerTitle: `Bookly${appEnv !== 'production' ? ` [${appEnv}]`  : ""}`,
                                  headerTitleAlign: "center",
                                  headerRight: logoutButton
                              }}
                />
                <Stack.Screen name="Register" component={RegisterScreen} options={{
                    headerTitle: ''
                }}/>
            </Stack.Navigator>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)}/>
        </NavigationContainer>
    );
}
