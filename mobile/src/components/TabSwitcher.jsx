import React, {useState} from 'react';
import TabName from './TabName'
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';

const TabSwitcher = () => {
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
        <SafeAreaView style={{flexDirection: 'row'}}>
			<View style={styles.tabContainer}>
				<TabName name="Cars" isActive={active["Cars"]} callback={switchTab}/>
				<TabName name="Flats" isActive={active["Flats"]} callback={switchTab}/>
				<TabName name="Parking" isActive={active["Parking"]} callback={switchTab}/>
			</View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
	tabContainer: {
		height: 30,
		flex: 1,
		flexDirection: 'row',
	}
})
export default TabSwitcher;
