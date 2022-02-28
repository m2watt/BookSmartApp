import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackNavigator} from '@react-navigation/native';
function HomeScreen({navigation}) {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>Welcome to BookSmart</Text>
            <Pressable style={styles.loginButton} onPress={() => navigation.navigate('BookingScreen')}>
                <Text style={styles.textA}>Book an Event Now</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:"blue",
        justifyContent: "center",
        alignItems: "center",

    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor:"blue",
        width:100,
        justifyContent: "center",
        alignItems: "baseline",
    },
    title: {
        fontSize:50,
        fontWeight:'100',
        color:"white",
        textAlign:"center",
        paddingBottom:50,
    },
    textA:{
        fontSize: 20,
        fontWeight: '400',
        color:"white",
        textAlign:"center",
    }
})

export default HomeScreen;