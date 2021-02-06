import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import {buttonTypes} from "../types/button.types";

const SuperButton = ({type, callback, params, navigation, }) => {

    const getText = () => {
        switch (type) {
            case buttonTypes.book:
                return 'Book';
            case buttonTypes.cancel:
                return 'Cancel';
        }
    }

    return (
        <TouchableOpacity
            onPress={() => {
                callback(params);
                navigation.goBack();
            }}
        >
            <Text>{getText()}</Text>
        </TouchableOpacity>
    )
}

export default SuperButton;
