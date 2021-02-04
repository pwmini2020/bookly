import React from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'

const TabName = (props) => {
	//TODO add onclick function
	return(
		<TouchableWithoutFeedback onPress={() => props.callback(props.name)}>
			<Text style={[styles.nameHolder, props.isActive ? styles.active : styles.inactive]}> {props.name} </Text>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	nameHolder: {
		color: 'white',
		textAlign: 'center',
		flex: 1,
	},
	active: {
		backgroundColor: 'dimgrey'
	},
	inactive: {
		backgroundColor: 'black'
	}
})

export default TabName;
