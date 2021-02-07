import React, {useState} from 'react';
import TabName from './TabName'
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';

const TabSwitcher = ({activeCars, activeFlats, activeParking}) => {
	const [active, setActive] = useState({
									"Cars": true,
									"Flats": false,
									"Parking": false
								});
	const switchTab = (tabName) => {
		setActive({
			"Cars": tabName === "Cars",
			"Flats": tabName === "Flats",
			"Parking": tabName === "Parking"
		})
	}	
    return (
        <View style={{flex: 1}}>
			<View style={styles.tabContainer}>
				<TabName name="Cars" isActive={active["Cars"]} callback={switchTab}/>
				<TabName name="Flats" isActive={active["Flats"]} callback={switchTab}/>
				<TabName name="Parking" isActive={active["Parking"]} callback={switchTab}/>
			</View>
			<View style={{flex: 4, marginHorizontal: 10}}>
			{active["Cars"] ? activeCars : <></>}
			{active["Flats"] ? activeFlats : <></>}
			{active["Parking"] ? activeParking : <></>}
			</View>
        </View>
    )

}

const styles = StyleSheet.create({
	tabContainer: {
		height: 30,
		flexDirection: 'row',
		marginHorizontal: 10,
		borderRadius: 10
	}
})
export default TabSwitcher;
