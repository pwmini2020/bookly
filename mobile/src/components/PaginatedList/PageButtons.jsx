import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {PAGE_SIZE} from '@env';
import {loginState} from "../../state";


const PageButton = ({request, amount, setItems}) => {
    const login = loginState.useValue();
    const [activePage, setPage] = React.useState(0);

    const generateButton = (page, text) => {
        return <TouchableOpacity
            style={activePage === page && text === undefined ? {...styles.button, ...styles.activeButton} : styles.button}
            onPress={() => {
                request(page, login)
                    .then(data => data.json())
                    .then(json => setItems(json.content))
                    .then(() => setPage(page))
            }}
            key={text ?? page}
        >
            <Text style={activePage === page && text === undefined ? styles.activeButtonText : {color: 'black'}}>{text ?? page + 1}</Text>
        </TouchableOpacity>
    };

    return (
        <View style={styles.row}>
            {generateButton(activePage > 0 ? activePage-1 : activePage, '<<')}
            { Math.ceil(amount / PAGE_SIZE) < 4 &&
                [...Array(Math.ceil(amount / PAGE_SIZE)).keys()]
                .map((val) => {
                    return generateButton(val);
                })
            }
            {
                // TODO: add support for generating extra ... in the middle
                Math.ceil(amount / PAGE_SIZE) > 3 && <>
                    {
                        generateButton()
                    }
                </>
            }
            {generateButton(activePage < Math.ceil(amount / PAGE_SIZE)-1 ? activePage+1 : activePage, '>>')}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 50,
        height: 40,
        width: 40,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeButtonText: {
       fontWeight: 'bold',
        color: 'white'
    },
    activeButton: {
        backgroundColor: '#909090',
        borderColor: 'red'
    }
});

export default PageButton;
