import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App'

export type LandingPageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


const LandingPage = ({navigation}:LandingPageProps)=>{
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.h1}>Welcome to the App</Text>
            <View>
              <Text style={styles.h1}>This is the Landing Page</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("SignUp")}><Text>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("SignIn")}><Text>Sign In</Text></TouchableOpacity>

          </View>
    )
  };

const styles = StyleSheet.create({
    h1: {
      width: '100%',
      fontSize: 32,
      textAlign: 'center',
      backgroundColor: 'red',
      fontFamily: 'sans-serif',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 16,
        color: 'black',
      },
  });

export default LandingPage;