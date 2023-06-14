import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import React from 'react'
import 'react-native-gesture-handler'
import { Button } from 'react-native-paper';

export const ResultsScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.button1}>
          <Button>
            ❤           1m
          </Button>
        </View>
        <View style={styles.button2}>
          <Button>
            💙          1h
          </Button>
        </View>
        <View style={styles.button3}>
          <Button>
            ❤            3h
          </Button>
        </View>
        <View style={styles.button4}>
          <Button>
            🤍            1d
          </Button>
        </View>
      </View>
    );
 }
  
 const styles = StyleSheet.create({
        container:  {
          backgroundColor: '#F3F3F3'
        },
        button1: {
          backgroundColor: 'white',
          marginTop: 30,
          borderRadius: 10,
          width: 267,
          height: 57,
          justifyContent: 'center',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowRadius: 2,
          shadowOffset: {
           height: 2,
           width: 2
         },
          shadowOpacity: 0.8,
          
        },
        button2 :{
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 10,
          width: 267,
          height: 57,
          justifyContent: 'center',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowRadius: 2,
          shadowOffset: {
           height: 2,
           width: 2
         },
          shadowOpacity: 0.8,
          
        },
        button3: {
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 10,
          width: 267,
          height: 57,
          justifyContent: 'center',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowRadius: 2,
          shadowOffset: {
           height: 2,
           width: 2
         },
          shadowOpacity: 0.8,
          
        },
        button4 :{
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 10,
          width: 267,
          height: 57,
          justifyContent: 'center',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowRadius: 2,
          shadowOffset: {
           height: 2,
           width: 2
         },
          shadowOpacity: 0.8,
          
        },
 
      }); 