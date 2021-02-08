import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import DetailsComponent from "../../components/DetailsScreenHelpers/DetailsComponent";

const DetailsScreen = ({navigation, route}) => {
    const props = route.params;

    return(
        <View>
            <DetailsComponent description={props.item} image={props.item.image} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default DetailsScreen;
