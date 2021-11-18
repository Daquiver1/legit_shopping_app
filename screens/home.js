import React from 'react'
import { StyleSheet, Text, Image, TextInput, View, ScrollView, TouchableOpacity, ImageBackground ,FlatList } from 'react-native';
import { Ionicons,AntDesign } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';



const home = ({navigation}) => {
    return (

      <SafeAreaView style={styles.mainContainer}>
            <ImageBackground style={{height: "100%"}} source={require("./../assets/background.jpg")}>
        

        <View style={{ backgroundColor: 'transparent', paddingTop: 45, marginBottom: 30 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <View>
                    <View style={styles.view3}>
                        <Text style={styles.text2}>Daquiver's</Text>
                         <Text style={styles.text3}>Boards</Text>
                    </View>

                 </View>
                    <Ionicons name="ios-person-circle-sharp" size={40} color="black"  onPress={() => {navigation.navigate("Home") }}/>
            </View>
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 370, marginBottom: 20 }}>

            <Text style={styles.button1Text}>All</Text>
            <Text style={styles.button2Text}>Boards</Text>
            <Text style={styles.button2Text}>Cookies</Text>
            <Text style={styles.button2Text}>Promotions</Text>
        </View>

        <TextInput style={styles.textInput} placeholder={'Search'} />


        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <Animatable.View animation="slideInDown" style={{ height: 850 }}>
              <View style={{ flexDirection: 'row', height: 200, width: '100%', justifyContent: 'space-evenly', marginBottom: 15 }}>
                <TouchableOpacity style={styles.productview1} onPress={() => { navigation.navigate("productpage1") }}>
                    <Image style={styles.image} source={require("./../assets/surf1.jpg")}/>
                    <View style={{ top: 0, alignItems: 'center' }}>
                      <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>RED VELVET</Text>
                      <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }}>CAKE</Text>
                      <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: `#02c38e` }}>$</Text>100</Text>
                    </View>
                </TouchableOpacity>

        <TouchableOpacity style={styles.productview2} onPress={() => { navigation.navigate("productpage2") }}>
          <Image style={styles.image} source={require("./../assets/surf2.jpg")}/>
            <View style={{ top: 0, alignItems: 'center' }}>
                <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>CHOCOLATE</Text>
                <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }}>CAKE</Text>
                <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: `#02c38e` }}>$</Text>85</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', height: 200, width: '100%', justifyContent: 'space-evenly', marginBottom: 15 }}>
        <TouchableOpacity style={styles.productview1} onPress={() => { navigation.navigate("productpage3") }}>
          <Image style={styles.image} source={require("./../assets/surf3.jpg")}/>

        <View style={{ top: 0, alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>VANILLA</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }}>CAKE</Text>
            <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: `#02c38e` }}>$</Text>70</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productview2} onPress={() => { navigation.navigate("productpage4")}}>
        <Image style={styles.image} source={require("./../assets/surf4.jpg")}/>

          <View style={{ top: 0, alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>CINAMMON</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }}>CUPCAKE</Text>
            <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: '#02c38e' }}>$</Text>25</Text>
          </View>
          </TouchableOpacity>
          </View>

        <View style={{ flexDirection: 'row', height: 200, width: '100%', justifyContent: 'space-evenly', marginBottom: 20 }}>
        <TouchableOpacity style={styles.productview1} onPress={() => { navigation.navigate("productpage5")}}>
          <Image style={styles.image} source={require("./../assets/surf5.jpg")}/>

          <View style={{ top: 0, alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>VANILLA</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }} onPress={() => {
              navigation.navigate("productpage3") }}>CUPCAKE</Text>
            <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: '#02c38e' }}>$</Text>36</Text>
          </View>
          </TouchableOpacity>
        <TouchableOpacity style={styles.productview2} onPress={() => { navigation.navigate("productpage6")}}>
          <Image style={styles.image} source={require("./../assets/surf6.jpg")}/>

          <View style={{ top: 0, alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>OAT</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }}>COOKIE</Text>
            <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: `#02c38e` }}>$</Text>15</Text>
          </View>
        </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', height: 200, width: '100%', justifyContent: 'space-evenly', marginBottom: 15 }}>
        <TouchableOpacity style={styles.productview1} onPress={() => { navigation.navigate("productpage7")}}>
          <Image style={styles.image} source={require("./../assets/surf7.jpg")}/>

          <View style={{ top: 0, alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>JELLY</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }} >DONUTS</Text>
            <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: '#02c38e' }}>$</Text>25</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productview2} onPress={() => { navigation.navigate("productpage8")}}>
          <Image style={styles.image} source={require("./../assets/surf8.jpg")}/>

          <View style={{ top: 0, alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b' }}>BUTTERMILK</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, color: '#3f3b3b', marginBottom: 5 }}>PANCAKE</Text>
            <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15 }}><Text style={{ color: '#02c38e' }}>$</Text>5</Text>
          </View>
        </TouchableOpacity>
        </View>        

          </Animatable.View>
          </ScrollView>
            <View style={styles.iconView}>
              <Ionicons name="settings-outline" size={26} color="black" onPress={() => {navigation.navigate("Settings")}} />
                <Ionicons name="home-outline" size={26} color="black" onPress={() => {navigation.navigate("ProductData")  }} />
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <Ionicons name="cart-outline" size={26} color="black" onPress={() => {navigation.navigate("cart") }} />
            </View>
            </View>

         </ImageBackground>
        </SafeAreaView>
        
  )
}

export default home

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%',
        alignItems: 'center',
      },

      img:{
        width:25,
        height:35,
      },
        image: {
            width: 70,
            height: 70,
        },
      mainContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8',
      },
      container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
      },
      view3: {
        flexDirection: 'row',
      },
      text1: {
        fontSize: 25,
        color: '#585858',
        marginRight: 5,
      },
      text2: {
        fontSize: 30,
        fontWeight: "500",
        color: 'black',
      },
      text3: {
        fontSize: 30,
        fontWeight: '100',
      },
      button1: {
        backgroundColor: '#F8F8F8',
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
      },
      textInput: {
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
        fontSize: 20,
        color: 'gray',
        width: '100%',
        marginBottom: 15,
      },
      productview1: {
        // backgroundColor: '#f0ffff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width:"40%",
        height: '100%',
        marginRight: 5,
      },
      productview2: {
        justifyContent: 'center',
        // backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        width:"40%",
        height: '100%',
      },
      button1Text: {
        color: `black`,
        fontSize: 22,
      },
      button2Text: {
        color: 'black',
        fontSize: 22,
      },
      imageStyle: {
        width: "100%",
        height: '38%',
        marginBottom: 20,
      },
      iconView: {
        flexDirection: "row",
        backgroundColor: '#fff',
        justifyContent: "space-around",
        alignItems: "center",
        height: 50,
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: 12,
      },  
})
