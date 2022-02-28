import React, {useRef} from 'react';
import {View, StyleSheet, Text, Pressable, Animated, TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native';
import check from '.././assets/67000-checkmark.json';


function ConfirmationScreen({navigation, route}) {
    const progress = useRef(new Animated.Value(0)).current;
    const handleAnimation = () =>{
        Animated.timing(progress, {
            toValue:1,
            duration:1000,
            useNativeDriver:true,
        }).start();
    }
    return (
        <View style={styles.container1}>
            
            <Text style={styles.textB}>Your total is ${route.params.cost} CAD</Text>
            
            <Pressable style={styles.costButton} onPress={handleAnimation}>
                <Text style={styles.textC}>Confirm Booking</Text>
            </Pressable>
            <TouchableOpacity style={styles.animation}>
            <LottieView style={styles.animation} progress={progress} source={check} autoPlay loop/>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container1:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    textB:{
        fontSize:50,
        fontWeight:'200',
        color:"black",
        padding:20,
        textAlign:"center",
      },
      textC:{
        fontSize:20,
        fontWeight:'300',
        color:"black",
        padding:20,
        textAlign:"center",
      },
      costButton:{
        width: "100%",
        height: 60,
        backgroundColor:"white",
        width:190,
        borderWidth:1,
        borderColor:"blue",
        justifyContent: "center",
        alignItems: "baseline",
      },
      animation:{
          height:100,
          width: 100,
       
      }
}
)

export default ConfirmationScreen;