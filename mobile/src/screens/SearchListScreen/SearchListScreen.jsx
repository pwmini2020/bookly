import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import PaginatedList from "../../components/PaginatedList/PaginatedList";
import {buttonTypes} from "../../types/button.types";

const SearchListScreen = ({navigation, route}) => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <PaginatedList type={buttonTypes.book}
                           resource={route.params.resource}
                           navigation={navigation}
                           params={route.params.options}
            />
        </View>

    )
}

const styles = StyleSheet.create({

});

export default SearchListScreen;
