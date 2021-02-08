import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, ScrollView} from "react-native";
import {buttonTypes} from "../../types/button.types";
import {resourceTypes} from "../../types/resource.types";
import {
    getCarsBookingsPageAsync,
    getFlatsBookingPageAsync,
    getParkingsBookingPageAsync
} from "../../services/bookings.service";
import PaginatedListBookingItem from "./ListItems/PaginatedListBookingItem";
import PageButton from "./PageButtons";
import {useIsFocused} from "@react-navigation/core";
import {loginState} from "../../state";
import {getCarsAsync} from "../../services/cars.service";
import PaginatedListCarItem from "./ListItems/PaginatedListCarItem";

const PaginatedList = ({type, resource, h, hh, navigation, params}) => {
    const [height, _] = React.useState(h - hh);
    const [amount, setAmount] = React.useState(0);
    const [amountIsSet, setAmountIsSet] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [resourceCall, setResourceCall] = React.useState();
    const isFocused = useIsFocused();
    const login = loginState.useValue();

    useEffect(() => {
        const tee = (request, page = 0) => {
            return request(page, login).then(async response => response.ok ? await response.json() : null)
                .then(json => {
                    if (json) {
                        setAmount(json.totalElements);
                        setAmountIsSet(true);
                        setItems(json.content);
                    }
                });
        }

        if (type === buttonTypes.cancel) {
            switch (resource) {
                case resourceTypes.cars: {
                    tee(getCarsBookingsPageAsync);
                    setResourceCall(() => getCarsBookingsPageAsync);
                    return;
                }
                case resourceTypes.flats: {
                    tee(getFlatsBookingPageAsync);
                    setResourceCall(() => getFlatsBookingPageAsync);
                    return;
                }
                case resourceTypes.parking: {
                    tee(getParkingsBookingPageAsync);
                    setResourceCall(() => getParkingsBookingPageAsync);
                    return;
                }
            }
        }
        if(type === buttonTypes.book) {
            switch (resource) {
                case resourceTypes.cars:
                    getCarsAsync(params)
                        .then(val => {
                            setAmount(val.length);
                            setAmountIsSet(true);
                            setItems(val);
                        });
                    setResourceCall(() => getCarsAsync);
            }
        }
    }, [type, resource, isFocused])

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
                    {amount > 0 && (
                        type === buttonTypes.cancel ?
                        <View>
                            {
                                items.map((val, idx) => {
                                    return <PaginatedListBookingItem
                                        key={idx}
                                        booking={val}
                                        height={50}
                                        navigation={navigation}
                                        deps={0}
                                    />
                                })
                            }
                            {
                                (resourceCall && type !== buttonTypes.book) && <PageButton amount={amount} request={resourceCall} setItems={setItems}/>
                            }
                        </View>
                            :
                            <>
                                <ScrollView>{
                                    items.map((val, idx) => {
                                    return <PaginatedListCarItem
                                    key={idx}
                                    item={{
                                        ...val,
                                        date: params.date
                                    }}
                                    navigation={navigation}
                                    />
                                })}
                                </ScrollView>
                            </>)

                    }
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    {amount === 0 && <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {("Sorry, there is nothing to show.").toUpperCase()}
                    </Text>}
                    </View>
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
