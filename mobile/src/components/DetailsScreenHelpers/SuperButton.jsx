import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {buttonTypes} from "../../types/button.types";
import {errorToast, successToast} from "../../helpers/toast.helper";

const SuperButton = ({type, callback, params, navigation}) => {

    const [style, setStyle] = React.useState();
    const [text, setText] = React.useState("");


    React.useEffect(() => {
        switch (type) {
            case buttonTypes.book:
                setText('Book');
                setStyle(styles.book);
                break;
            case buttonTypes.cancel:
                setText('Cancel');
                setStyle(styles.cancel);
                break;
        }
    });

    return (
        <TouchableOpacity
            onPress={() => {
                callback(params).then(r => successToast(r.status));
                navigation.goBack();
            }}
            style={style}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    cancel: {
        borderRadius: 15,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    book: {
        borderRadius: 15,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default SuperButton;
