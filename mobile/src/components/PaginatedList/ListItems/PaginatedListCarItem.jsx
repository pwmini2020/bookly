import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {resourceTypes} from "../../../types/resource.types";
import {userIdState} from "../../../state";

const PaginatedListCarItem = ({navigation, item}) =>{

    const userId =  userIdState.useValue();
    return(
        <TouchableOpacity
            style={{...styles.main, height: 60}}
            onPress={() => navigation.navigate("Details", {
                item,
                type: resourceTypes.cars,
                params: {
                    userId: userId,
                    itemId: item.id,
                    date: item.date,
                    itemType: 'Car'
                }
            })}
        >
            <View style={{...styles.main, height: 40}} >
                <View style={styles.row}>
                    <Text style={styles.name}>{item.name.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: '5%'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '7.5%'
    },
    name: {
        fontFamily: 'System',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10
    }
});

export default PaginatedListCarItem;
