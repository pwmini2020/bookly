import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from "react-native";

const PaginatedListItem = ({navigation, booking, height}) => {
    return (
        <TouchableOpacity
            style={{...styles.main, height: height}}
            onPress={() => navigation.navigate("Details", {
                item: {
                    ...booking.item,
                    bookingId: booking.id
                }})}
        >
            <View style={{...styles.main, height: height}} >
                <View style={styles.row}>
                    <Text style={styles.name}>{booking.item.name.toUpperCase()}</Text>
                    {
                        booking.active !== undefined && <Text>{booking.active ? '🟢' : '🔴'}</Text>
                    }
                </View>
            </View>

        </TouchableOpacity>
    );
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

export default PaginatedListItem;
