import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import DialogInput from 'react-native-dialog-input'
import {resourceTypes} from "../../types/resource.types";
import {errorToast} from "../../helpers/toast.helper";

const SearchParkingTab = ({navigation}) => {
	//Date States
	const [date, setDate] = useState(new Date(1598051730000));
	const [dateSet, setDateSet] = useState(false);
	const [dateMode, setDateMode] = useState('date');
	const [dateShow, setDateShow] = useState(false);
	//Location States
	const [locationShow, setLocationShow] = useState(false)
	const [location, setLocation] = useState("");
	//Car Type Functions
	const [parkingTypeShow, setParkingTypeShow] = useState(false)
	const [parkingType, setParkingType] = useState("");
	//Date functions
	const onDateChange = (e, selectedDate)=>{
		const curDate = selectedDate || date;
		setDateShow(false);
		setDate(curDate);
		setDateSet(true);
	}

	const showMode = (currentMode) => {
		setDateShow(true);
		setDateMode(currentMode);
	};

	const showDatePicker = () => {
		showMode('date');
	};

	const validateInput = () => {
		if(!dateSet) {
			errorToast('Set date.');
			return false;
		}
		if(!location) {
			errorToast('Set location.');
			return false;
		}
		if(!parkingType) {
			errorToast('Set parking type.');
			return false;
		}
		return true;
	}

	return(
		<>
		<View style={styles.tab}>
			<View style={styles.button}>
				<Button onPress={showDatePicker} title={dateSet ? date.toDateString() : "Date"}/>
			</View>
			<View style={styles.button}>
				<Button onPress={()=>setLocationShow(true)} title={location=="" ? "Location" : location}/>
			</View>
			<View style={styles.button}>
				<Button onPress={()=>setParkingTypeShow(true)} title={parkingType=="" ? "Parking Type" : parkingType}/>
			</View>
			<View style={[styles.searchButton, styles.button]}>
				<Button title="Search"
						color="red"
						onPress={() => {
							if(validateInput()) {
								navigation.navigate("Search", {
									options: {
										location,
										date,
										parkingType
									},
									resource: resourceTypes.parking
								})
							}
						}}
				/>
			</View>
		</View>
		<View style={styles.viewBooking}>
			<Button onPress={() => navigation.navigate("History", {active: resourceTypes.parking})}
					title="View Your Bookings..."/>
		</View>
		{
			dateShow && (
				<DateTimePicker 
					value={date}
					mode={dateMode}
					is24Hour={true}
					display="default"
					onChange={onDateChange}
				/>
			)
		}
		<DialogInput 
			isDialogVisible={locationShow}
			title={"Location"}
			message={"Choose Location for your booking"}
			hintInput={"e.g. Warsaw"}
			submitInput={(inputText) => {if(inputText===undefined){inputText=""}setLocation(inputText.trim()); setLocationShow(false)}}
			closeDialog={() => setLocationShow(false)}
		/>
		<DialogInput 
			isDialogVisible={parkingTypeShow}
			title={"Parking Type"}
			message={"Choose Parking Type for your booking"}
			hintInput={"e.g. Underground"}
			submitInput={(inputText) => {if(inputText===undefined){inputText=""}setParkingType(inputText.trim()); setParkingTypeShow(false)}}
			closeDialog={() => setParkingTypeShow(false)}
		/>
		</>
	)
}

const styles = StyleSheet.create({
	tab: {
		backgroundColor: "#909090",
		flex: 6,
		paddingLeft: 30,
		paddingRight: 30,
		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,
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

export default SearchParkingTab;
