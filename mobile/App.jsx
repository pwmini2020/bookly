import React from "react";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import {logoutUserAsync} from "./src/services/auth.service";
import tokenState from "./src/state";

export default function App() {
    const Stack = createStackNavigator();

    const [token, setToken] = tokenState.use();

    const logoutButton = () => (token ?
            <TouchableOpacity
                onPress={() => logoutUserAsync()}
            >
                <Icon name="exit" size={35} color="#000000"/>
            </TouchableOpacity> : <></>
    );

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={
                                  {
                                      headerShown: true,
                                      headerTitle: 'Bookly',
                                      headerRight: logoutButton
                                  }
                              }
                />
            </Stack.Navigator>
            <Toast ref={(ref) => Toast.setRef(ref)}/>
        </NavigationContainer>
    );
}
