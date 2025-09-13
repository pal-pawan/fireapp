import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function WelcomeWindow() {
  return (
    <View style={styles.container}>
      <Image
            source={require('../assets/welcome-window-img.png')}
            style={styles.welcomeImage}/>
      <Text style={styles.text}>Prepare | Practice | CrackIt</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#dadada',
        borderRadius:5,
        borderBottomLeftRadius:40
    },
    welcomeImage: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
      justifyContent:'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color:'white'
    },
  });