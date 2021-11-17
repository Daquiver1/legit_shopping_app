import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity, ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const splash_start = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
        <ImageBackground style={styles.imageBackground} source={require("./../assets/splash.jpg")}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.loginText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default splash_start

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8',
      },
    welcomeText: {
        fontStyle: "italic",    
        position: "relative",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 36,
}, 
imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
},

image: {
width: 250,
height: 320,
},

loginBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#66b2ff",
    margin: 20,
  },

  signBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#66b2ff",
    margin: 20,
    marginTop: 10,
    marginBottom: 40,
  },
})