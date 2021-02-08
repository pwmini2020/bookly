import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import PaginatedList from "../../components/PaginatedList/PaginatedList";
import {buttonTypes} from "../../types/button.types";

const SearchListScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>Some.</Text>
            <PaginatedList type={buttonTypes.book}
                           resource={route.params.resource}
                           navigation={navigation}
            />
        </View>

    )
}

const styles = StyleSheet.create({

});

export default SearchListScreen;
