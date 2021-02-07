import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from "react-native";
import {buttonTypes} from "../../types/button.types";
import {resourceTypes} from "../../types/resource.types";
import {
    getCarsBookingsPageAsync,
    getFlatsBookingPageAsync,
    getParkingsBookingPageAsync
} from "../../services/history.service";
import PaginatedListItem from "./PaginatedListItem";

const PaginatedList = ({type, resource, h, hh, navigation, login}) => {
    const [height, _] = React.useState(h - hh);
    const [amount, setAmount] = React.useState(0);
    const [amountIsSet, setAmountIsSet] = React.useState(false);
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        const tee = (request) => {
            return request(0,login).then(async response => response.ok ? await response.json() : null)
                .then(json => {
                    if (json) {
                        setAmount(json.numberOfElements);
                        setAmountIsSet(true);
                        setItems(json.content);
                    }
                });
        }

        if (type === buttonTypes.cancel) {
            switch (resource) {
                case resourceTypes.cars: {
                    tee(getCarsBookingsPageAsync);
                    return;
                }
                case resourceTypes.flats: {
                    tee(getFlatsBookingPageAsync);
                    return;
                }
                case resourceTypes.parking: {
                    tee(getParkingsBookingPageAsync);
                    return;
                }
            }
        }
    }, [type, resource])

    return (
        <View style={styles.mainView}>
            {!amountIsSet ?
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        style={styles.activityIndicator}
                        color='white'
                    />
                </View>

                :
                <View>
                    {
                        items.map((val, idx) => {
                            return <PaginatedListItem key={idx} item={val} height={50} navigation={navigation}/>
                        })
                    }

                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerActivity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    mainView: {
        paddingTop: '15%',
        paddingHorizontal: '5%',
        backgroundColor: '#909090',
        height: "98%",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    }
});

export default PaginatedList;
