import React from "react";
import {View, Text, Button, TextInput,StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";
import Logo from "./../assets/splash.png";

const settings = ({navigation}) => {

  const settingsOptions = [
    {title: "Profile", subTitle: "Setup your profile", onPress: () => this.onPress()},
    {title: "Accounts", subTitle: "Modify your account settings", onPress: () => this.onPress()},
    {title: "Language", subTitle: "Change the language", onPress: () => this.onPress()},
    {title: "MyInfo", subTitle: "Setup your profile", onPress: () => this.onPress()},
    {title: "MyInfo", subTitle: "Setup your profile", onPress: () => this.onPress()},
    {title: "MyInfo", subTitle: "Setup your profile", onPress: () => this.onPress()},
  ]
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {settingsOptions.map(({title, subTitle, onPress}, Index) =>(
        <TouchableOpacity key={title}>
          <View style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 20,
          }}>
            <Text style={{fontSize: 17}}>{title}</Text>
            {subTitle && <Text style={{
              fontSize:14, 
              opacity:0.6, 
              paddingTop:5
            }}>{subTitle}</Text>}
          </View>

          <View style = {{height: 0.5, backgroundColor: "#000"}} />
        </TouchableOpacity>
        ))}
    </ScrollView>
  )
}
export default settings