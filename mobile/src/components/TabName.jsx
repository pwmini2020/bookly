import React from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'

const TabName = (props) => {
	return(
		<TouchableWithoutFeedback onPress={() => props.callback(props.name)}>
			<Text style={[styles.nameHolder, props.isActive ? styles.active : styles.inactive]}> {props.name.toUpperCase()} </Text>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	nameHolder: {
		color: 'white',
		textAlign: 'center',
		flex: 1,
		paddingTop: 5,
		fontSize: 20,
	},
	active: {
		backgroundColor: '#909090',
		borderTopLeftRadius: 15,
		borderTopEndRadius: 15,
		borderTopStartRadius:15,
		borderTopRightRadius: 15,
		fontWeight: 'bold'
	},
	inactive: {
		backgroundColor: 'white',
		color: '#909090',
		opacity: 0.8
	}
})

export default TabName;
