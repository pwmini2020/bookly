import React, {useEffect} from 'react';
import {SafeAreaView, View} from "react-native";
import Login from "../../components/Login";
import TabSwitcher from "../../components/TabSwitcher";
import SearchCarsTab from "../../components/SearchCarsTab.jsx"
import SearchFlatsTab from "../../components/SearchFlatsTab.jsx"
import SearchParkingTab from "../../components/SearchParkingTab.jsx"
import tokenState from "../../state";
import {tryRestoreUserAsync} from "../../services/auth.service";

const HomeScreen = ({navigation, route}) => {
    const token = tokenState.useValue();

    useEffect(() => {
        //TODO: uncomment once backend is connected.
        if(!token) {
            tryRestoreUserAsync();
        }
    }, [token]);

    return (
        <View style={{
            flex: 1,
//            justifyContent: "center",
//            alignItems: "center",
        }}>
            {token ?
				<TabSwitcher
                    activeCars = {<SearchCarsTab/>}
                    activeFlats = {<SearchFlatsTab/>}
                    activeParking = {<SearchParkingTab/>}
				/> 
				: 
				<Login/>}
        </View>
    )
}

export default HomeScreen;
