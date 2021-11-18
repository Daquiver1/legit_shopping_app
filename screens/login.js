import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { screensEnabled } from "react-native-screens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login({navigation}) {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const checkInput = (string) =>
  {
    if(typeof(email) !== "string") {
      alert('Please enter email');
      return;
    }
    if(typeof(password) !== "string") {
      alert('Please enter password');
      return;
    }
    else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
    <ImageBackground style={styles.imageBackground} source={require("./../assets/splash.jpg")}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <Ionicons name="mail-open" size={24} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="black"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={styles.inputView}>
      <Ionicons name="eye-off-outline" size={24} color="black" />    
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor='black'
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={checkInput}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: 20,
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  inputView: {
    flexDirection: "row",
    paddingLeft: 12,
    backgroundColor: "#778899",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    margin: 5,
    alignItems: "center"
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#778899",
  },

  loginText:{
      color: "#111"
  }

});