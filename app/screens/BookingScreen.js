import React, {useState} from 'react'
import {View, StyleSheet, Text, Pressable} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import InputSpinner from 'react-native-input-spinner';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackNavigator} from '@react-navigation/native';

function BookingScreen({navigation}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [cost, setCost] = useState(0);
  const [hours, setHours] = useState(1);
  var startDate = new Date();
  var endDate = new Date();


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    return (
    <View style={styles.background}>
      <Text style={styles.textB}>Choose date and time of event</Text>
      <View style={styles.DateTimePicker}>
        <Text style={styles.textA}>Date: </Text>
        <DateTimePicker showTimepicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
          isVisible={true}
          style={styles.dateTimeButton}
        />
        </View>

    <View style={styles.DateTimePicker}>
      <Text style={styles.textA}>Start Time: </Text>
        
        <DateTimePicker showDatepicker
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
          isVisible={true}
          style={styles.dateTimeButton}
        />
    </View>
    <View>
      <Text style={styles.textA}>Number of Hours: </Text>
      <InputSpinner
	    max={10}
	    min={1}
	    step={1}
	    colorMax={"#f04048"}
	    colorMin={"#40c5f4"}
	    value={0}
	    onChange={(num) => {setHours(num)}}
    />
    </View >
    <View style={styles.DateTimePicker}>
      <Pressable style={styles.costButton} onPress={() =>{
                console.log(hours);
                var cost = 0;
                var dateTemp = new Date(date);
                var day = 0;
                for (var i=0; i < hours; i ++){
                  day = dateTemp.getDay();
                
                  if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5){
                    cost += 100;
                  }
                  else{
                    cost += 150;
                  }
                  dateTemp.setHours(dateTemp.getHours() + 1,dateTemp.getMinutes(),0,0);
                 
                }
                setCost(cost);
                navigation.navigate('ConfirmationScreen', {cost: cost})
                }}>
                
                <Text style={styles.textC}>Calculate Cost</Text>
      </Pressable>
      </View>
            
    </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:"white",
        alignItems: "center",

    },
    dateTimeButton:{
        width: "100%",
        height: 50,
        backgroundColor:"white",
        width:130,
        justifyContent: "center",
        alignItems: "center",

    },
    costButton:{
      width: "100%",
      height: 40,
      backgroundColor:"white",
      width:160,
      borderColor:"blue",
      borderWidth:1,
      justifyContent: "center",
      alignItems: "center",
    },
    DateTimePicker:{
        flexDirection:'row',
        alignItems:"center",
        padding:20,
    },
    title: {
        fontSize:50,
        fontWeight:'100',
        color:"white",
    },
    textA:{
        fontSize: 20,
        fontWeight: '300',
        color:"black",
    },
    textB:{
      fontSize:30,
      fontWeight:'200',
      color:"black",
      padding:20,
      textAlign:"center",
    },
    textC:{
      fontSize: 20,
        fontWeight: '300',
        color:"black",
    }
})

export default BookingScreen;