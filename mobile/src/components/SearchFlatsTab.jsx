import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import DialogInput from 'react-native-dialog-input'

const SearchFlatsTab = () => {
	//Date States
	const [date, setDate] = useState(new Date(1598051730000));
	const [dateSet, setDateSet] = useState(false);
	const [dateMode, setDateMode] = useState('date');
	const [dateShow, setDateShow] = useState(false);
	//Location States
	const [locationShow, setLocationShow] = useState(false);
	const [location, setLocation] = useState("");
	//Flat States
	const [flatsShow, setFlatsShow] = useState(false);
	const [flatsNo, setFlatsNo] = useState("");
	const [flatsVerified, setFlatsVerified] = useState(true);

	//Flat functions
	function isInt(value) {
	  if (isNaN(value)) {
	    return false;
	  }
	  var x = parseFloat(value);
	  return (x | 0) === x;
	}	

	const verify = (textInput) => {
		if(!isInt(textInput)){
			setFlatsVerified(false);
			return false;
		}
		else if (textInput < 1 || textInput > 99){
			setFlatsVerified(false);
			return false;
		}
		else{
			setFlatsVerified(true)
			return true;
		}
	}

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
				<Button onPress={() => setFlatsShow(true)} title={flatsNo=="" ? "Number of Flats" : flatsNo}/>
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
			submitInput={(inputText) => {if(inputText===undefined){inputText=""}setLocation(inputText.trim()); setLocationShow(false)}}
			closeDialog={() => setLocationShow(false)}
		/>
		<DialogInput 
			isDialogVisible={flatsShow}
			title={"Number of Guests"}
			message={flatsVerified ? "Input the number of Guests" : "Please input a valid number"}
			textInputProps={{keyboardType: "numeric"}}
			hintInput={"e.g. 3"}
			submitInput={(inputText) => {
				if(inputText===undefined){inputText=""}
				if(verify(inputText.trim())){
					setFlatsNo(inputText.trim());
					setFlatsShow(false)
				}
			}}
			closeDialog={() => setFlatsShow(false)}
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

export default SearchFlatsTab;
