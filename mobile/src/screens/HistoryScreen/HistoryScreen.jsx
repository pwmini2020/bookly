import React from 'react';
import {Text, View} from 'react-native';
import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import PaginatedList from "../../components/PaginatedList/PaginatedList";
import {buttonTypes} from "../../types/button.types";
import {resourceTypes} from "../../types/resource.types";
import {loginState} from "../../state";

const HistoryScreen = ({navigation, route}) => {
    const params = route.params;

    return (
        <View
            style={{
                backgroundColor: 'white',
                flex: 1
            }}
        >
            <TabSwitcher caller={params.active}
                activeCars={<PaginatedList type={buttonTypes.cancel} resource={resourceTypes.cars}
                                           navigation={navigation}/>}
                activeFlats={<PaginatedList type={buttonTypes.cancel} resource={resourceTypes.flats}
                                            navigation={navigation}/>}
                activeParking={<PaginatedList type={buttonTypes.cancel} resource={resourceTypes.parking}
                                               navigation={navigation}/>}
            />
        </View>
    )
}

export default HistoryScreen;
