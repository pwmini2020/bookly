import React from 'react';
import {View, Image, Text} from "react-native";
import {splitString} from "../../helpers/string.helper";
import {ignore} from "../../types/ignore.keys";
import SuperButton from "./SuperButton";
import {deleteBookingAsync} from "../../services/bookings.service";
import {buttonTypes} from "../../types/button.types";

const DetailsComponent = ({image, description, navigation}) => {

    const renderItem = (k ,v) => {
        if(!ignore.includes(k)) {

            return (
                <View key={k} style={{flexDirection: 'row', alignContent: 'center',}}>
                    <Text style={{width: '40%', marginHorizontal: '5%',fontWeight: 'bold',fontSize: 20 }}>{splitString(k).toUpperCase()}</Text>
                    <Text style={{width: '40%', marginHorizontal: '5%', fontSize: 20 }}>{v.toString()}</Text>
                </View>
                )

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
        </View>
    )
}

export default DetailsComponent;
