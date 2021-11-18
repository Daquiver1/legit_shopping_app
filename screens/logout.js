import React from "react";
import {View, Text, Button, TextInput,StyleSheet, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";
import Logo from "./../assets/logo.png";

const logout = ({navigation}) => {
  return (
    <View>
      <Text>Center everything, use flexbox. With the last view, the thanks should be smaller than logged out.</Text>
      <View>
        <Text>Daquiver.Inc</Text>
      </View>
      <View>
        <Text>#TODO: Insert a check icon or maybe image.</Text>
      </View>
      <View>
        <Text>You have been logged out</Text>
        <Text>Thanks for shopping with us.</Text>
      </View>
    </View>

    
  )
}
export default logout