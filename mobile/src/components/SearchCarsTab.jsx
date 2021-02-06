import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import DialogInput from 'react-native-dialog-input'

const SearchCarsTab = () => {
	//Date States
	const [date, setDate] = useState(new Date(1598051730000));
	const [dateSet, setDateSet] = useState(false);
	const [dateMode, setDateMode] = useState('date');
	const [dateShow, setDateShow] = useState(false);
	//Location States
	const [locationShow, setLocationShow] = useState(false)
	const [location, setLocation] = useState("");
	//Car Type Functions
	const [carTypeShow, setCarTypeShow] = useState(false)
	const [carType, setCarType] = useState("");
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
				<Button onPress={()=>setCarTypeShow(true)} title={carType=="" ? "Car Type" : carType}/>
			</View>
			<View style={[styles.searchButton, styles.button]}>
				<Button title="Search" color="red"/>
			</View>
		</View>
		<View style={styles.viewBooking}>
			<Button title="View Your Bookings..."/>
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
			submitInput={(inputText) => {setLocation(inputText.trim()); setLocationShow(false)}}
			closeDialog={() => setLocationShow(false)}
		/>
		<DialogInput 
			isDialogVisible={carTypeShow}
			title={"Car Type"}
			message={"Choose Car Type for your booking"}
			hintInput={"e.g. Ferrari idk"}
			submitInput={(inputText) => {setCarType(inputText.trim()); setCarTypeShow(false)}}
			closeDialog={() => setCarTypeShow(false)}
		/>
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

export default SearchCarsTab;
