
import React from 'react';
import {View, StyleSheet, Button} from 'react-native'

const SearchFlatsTab = () => {
	
	return(
		<>
		<View style={styles.tab}>
			<View style={styles.button}>
				<Button title="Date"/>
			</View>
			<View style={styles.button}>
				<Button title="Location"/>
			</View>
			<View style={styles.button}>
				<Button title="Number of Flats"/>
			</View>
			<View style={[styles.searchButton, styles.button]}>
				<Button title="Search" color="red"/>
			</View>
		</View>
		<View style={styles.viewBooking}>
			<Button title="View Your Bookings..."/>
		</View>
		</>
	)
}

const styles = StyleSheet.create({
	tab: {
		backgroundColor: "grey",
		flex: 6,
		paddingLeft: 30,
		paddingRight: 30,
	},
	button: {
		margin: 10,
	},
	searchButton: {
		paddingTop: 100,
	},
	viewBooking: {
		backgroundColor: "white",
		flex: 1,
		padding: 50
	}
})

export default SearchFlatsTab;
