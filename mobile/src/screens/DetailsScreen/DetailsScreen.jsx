import React from 'react';
import {View, StyleSheet, Text} from "react-native";

const DetailsScreen = ({navigation, route}) => {
    const props = route.params;

    return(
        <View>
            <Text>Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default DetailsScreen;
