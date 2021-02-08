import React, {useEffect} from 'react';
import {View, Text} from "react-native";
import Login from "../../components/Auth/Login";
import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import SearchCarsTab from "../../components/SearchTabs/SearchCarsTab.jsx"
import SearchFlatsTab from "../../components/SearchTabs/SearchFlatsTab.jsx"
import SearchParkingTab from "../../components/SearchTabs/SearchParkingTab.jsx"
import {tokenState} from "../../state";
import {tryRestoreUserAsync} from "../../services/auth.service";

const HomeScreen = ({navigation, route}) => {
    const token = tokenState.useValue();

    useEffect(() => {
        if (!token) {
            tryRestoreUserAsync();
        }
    }, [token]);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            {token ?
                <TabSwitcher
                    activeCars={<SearchCarsTab navigation={navigation}/>}
                    activeFlats={<SearchFlatsTab navigation={navigation}/>}
                    activeParking={<SearchParkingTab navigation={navigation}/>}
                />
                :
                <Login navigation={navigation}/>}
        </View>
    )
}

export default HomeScreen;
