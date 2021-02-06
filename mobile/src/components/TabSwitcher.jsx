import React, {useState} from 'react';
import TabName from './TabName'
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';

const TabSwitcher = (props) => {
	const [active, setActive] = useState({
									"Cars": true,
									"Flats": false,
									"Parking": false
								});
	const switchTab = (tabName) => {
		setActive({
			"Cars": tabName == "Cars",
			"Flats": tabName == "Flats",
			"Parking": tabName == "Parking"
		})
	}	
    return (
        <View style={{flex: 1}}>
			<View style={styles.tabContainer}>
				<TabName name="Cars" isActive={active["Cars"]} callback={switchTab}/>
				<TabName name="Flats" isActive={active["Flats"]} callback={switchTab}/>
				<TabName name="Parking" isActive={active["Parking"]} callback={switchTab}/>
			</View>
			<View style={{flex: 4}}>
			{active["Cars"] ? props.activeCars : <></>}
			{active["Flats"] ? props.activeFlats : <></>}
			{active["Parking"] ? props.activeParking : <></>}
			</View>
        </View>
    )

}

const styles = StyleSheet.create({
	tabContainer: {
		height: 30,
		flexDirection: 'row',
	}
})
export default TabSwitcher;
