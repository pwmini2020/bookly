import React, {useState, useEffect} from "react";
import {SafeAreaView, View, Text} from "react-native";
import Toast from 'react-native-toast-message';
import { getSecurityTokenAsync } from "./src/services/auth.service";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

export default function App() {
    const Stack = createStackNavigator();

    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home"
                                  component={HomeScreen}
                                  options={{headerShown: false}}
                    />

                </Stack.Navigator>
                <Toast ref={(ref) => Toast.setRef(ref)}/>
            </NavigationContainer>
    );
}
