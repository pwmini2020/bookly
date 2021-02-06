import React from 'react';
import {View, Image, Text} from "react-native";
import {splitString} from "../helpers/string.helper";

const DetailsComponent = ({image, description}) => {

    const renderItem = (k ,v) => {
        return <Text>{splitString(k)} : {v}</Text>
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
