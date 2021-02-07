import React from 'react';
import {Text, View} from 'react-native';
import TabSwitcher from "../../components/TabSwitcher";
import PaginatedList from "../../components/PaginatedList/PaginatedList";
import {buttonTypes} from "../../types/button.types";
import {resourceTypes} from "../../types/resource.types";
import {loginState, tokenState} from "../../state";

const HistoryScreen = ({navigation, route}) => {
    const login = loginState.useValue();
    const token = tokenState.useValue();

    return (
        <View
            style={{
                backgroundColor: 'white',
                flex: 1
            }}
        >
            <TabSwitcher
                activeCars={<PaginatedList type={buttonTypes.cancel} resource={resourceTypes.cars} login={login}
                                           navigation={navigation}/>}
                activeFlats={<PaginatedList type={buttonTypes.cancel} resource={resourceTypes.flats} login={login}
                                            navigation={navigation}/>}
                activeParking={<PaginatedList type={buttonTypes.cancel} resource={resourceTypes.parking}
                                              login={login} navigation={navigation}/>}
            />
        </View>
    )
}

export default HistoryScreen;
