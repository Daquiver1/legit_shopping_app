import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';



export default function productpage6({navigation}) {
  
  return (
    <View style={styles.container}>


      <Animatable.View animation="fadeInDownBig" style={{ height: '35%', width: '100%', borderRadius: 25, marginBottom: 15, backgroundColor: 'lightgray', padding: 10 }}>
        <View style={{ paddingTop: 45, paddingRight: 10, paddingLeft: 10 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Ionicons name="home-outline" size={30} color="#484848" onPress={() => {navigation.navigate("Home")}} />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Ionicons name="cart-outline" size={30} color="#484848" onPress={() => {navigation.navigate("cart")  }} />
            </View>
          </View>
        </View>
        <View style={styles.productView1}>
            <Image style={styles.image} source={require("./../assets/IMG6.jpg")}/>
        </View>
      </Animatable.View>

      <View style={{ padding: 20 }}>

        <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: '400', fontSize: 28, color: 'black' }}>OAT</Text>
            <Text style={{ fontWeight: '200', marginBottom: 15, fontSize: 28 }}>COOKIE</Text>

          </View>
          


        </View>




        <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%', height: 40, marginBottom: 20 }}>
          <Text style={{ fontWeight: '500', fontSize: 40 }}><Text style={{ color: "#66b2ff" }}>$</Text>15</Text>

          <TouchableOpacity style={styles.button1}>
            <Ionicons name="remove-sharp" size={22} color="gray" />
            <Text style={{ fontSize: 22, color: "black" }}>1</Text>
            <Ionicons name="add-sharp" size={22} color="black" />

          </TouchableOpacity>


        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <Text style={{ fontSize: 17, fontWeight: '500', color: 'gray', marginBottom: 7 }}>Sizes Available</Text>

          <Text style={{ fontSize: 17, fontWeight: '500', color: 'gray' }}>Ratings</Text>

        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '35%' }}>

            <TouchableOpacity style={styles.sizeContainer}><Text style={styles.sizeText}>R</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sizeContainer}><Text style={styles.sizeText}>L</Text></TouchableOpacity>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

            <Ionicons name="star" size={22} color="#66b2ff" />
            <Ionicons name="star" size={22} color="#66b2ff" />
            <Ionicons name="star" size={22} color="#66b2ff" />
            <Ionicons name="star" size={22} color="#66b2ff" />
            <Ionicons name="star-half-sharp" size={22} color="#66b2ff" />

          </View>
        </View>

        <View style={{ height: '27%', width: '100%', borderRadius: '10', marginBottom: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'gray', marginBottom: 8 }}>Item Description</Text>

          <View style={{ width: '100%', marginBottom: 5 }}>

            <Text style={{ fontSize: 21, fontWeight: '400', color: 'black', marginBottom: 3 }}>Sizes  are 'Medium and Large'</Text>
            <Text style={{ fontSize: 21, fontWeight: '400', color: 'black', marginBottom: 3 }}>Manufactured by Lormy's Confectionery</Text>
            <Text style={{ fontSize: 21, fontWeight: '400', color: 'black', marginBottom: 3 }}>Made in Ghana</Text>
            <Text style={{ fontSize: 21, fontWeight: '400', color: 'black', marginBottom: 3 }}>It is one of the top-selling products in the market</Text>

          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("cart")}}>
          <Text style={styles.buttonText}>Add to Cart</Text>
          <Ionicons name="cart-outline" size={20} color="white" />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F8F8F8',
  },
  view3: {
    flexDirection: 'row',
  },
  text1: {
    fontSize: 25,
    color: "#585858",
    marginRight: 5,
  },
  text2: {
    fontSize: 30,
    fontWeight: "500",
    color: "black",
  },
  text3: {
    fontSize: 30,
    fontWeight: '100',
  },
  button1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: "#F8F8F8",
    width: '35%',
    padding: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  productView1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: "80%",
    height: '80%',
    marginTop: -13,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: "#66b2ff",
    padding: 15,
    borderRadius: 6,
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: '700',
  },
  sizeContainer: {
    backgroundColor: 'white',
    width: 45,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  sizeText: {
    fontWeight: '600',
    fontSize: 20,
  },
})