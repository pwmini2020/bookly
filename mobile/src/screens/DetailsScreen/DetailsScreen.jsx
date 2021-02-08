import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import DetailsComponent from "../../components/DetailsScreenHelpers/DetailsComponent";
import SuperButton from "../../components/DetailsScreenHelpers/SuperButton";
import {createBookingAsync, deleteBookingAsync} from "../../services/bookings.service";
import {buttonTypes} from "../../types/button.types";

const DetailsScreen = ({navigation, route}) => {
    const props = route.params;

    return(
        <View>
            <DetailsComponent description={props.item} image={props.item.image} navigation={navigation}/>
            <SuperButton
                navigation={navigation}
                callback={props.item.bookingId ? deleteBookingAsync : createBookingAsync }
                params={props.item.bookingId ?? props.params}
                type={props.item.bookingId ? buttonTypes.cancel : buttonTypes.book}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default DetailsScreen;
