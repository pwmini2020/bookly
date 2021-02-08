import React from 'react';
import {View, Image, Text} from "react-native";
import {splitString} from "../../helpers/string.helper";
import {ignore} from "../../types/ignore.keys";
import SuperButton from "./SuperButton";
import {deleteBookingAsync} from "../../services/history.service";
import {buttonTypes} from "../../types/button.types";

const DetailsComponent = ({image, description, navigation}) => {

    const renderItem = (k ,v) => {
        if(!ignore.includes(k)) {
            return <Text key={k}>{splitString(k)} : {v.toString()}</Text>
        }
    }

    return (
        <View>
            {image ?
                <Image
                    source={image}
                /> : <></>
            }
            {

                Object.entries(description).map(([key, value]) => {
                    return renderItem(key, value);
                })
            }
            <SuperButton
                navigation={navigation}
                callback={deleteBookingAsync}
                params={description.bookingId}
                type={description.bookingId ? buttonTypes.cancel : buttonTypes.book}
            />
        </View>
    )
}

export default DetailsComponent;
