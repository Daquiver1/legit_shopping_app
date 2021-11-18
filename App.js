import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash_start from './screens/splash_start';
import login from './screens/login';
import home from './screens/home';
import signup from './screens/signup';
import settings from "./screens/settings";
import logout from "./screens/logout";
import about from "./screens/about";
import productpage1 from './screens/productpage1';
import productpage2 from './screens/productpage2';
import productpage3 from './screens/productpage3';
import productpage4 from './screens/productpage4';
import productpage5 from './screens/productpage5';
import productpage6 from './screens/productpage6';
import productpage7 from './screens/productpage7';
import productpage8 from './screens/productpage8';
import payment from './screens/payment';
import cart from './screens/cart';

const Stack = createNativeStackNavigator (); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logout" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={splash_start} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Signup" component={signup} />
        <Stack.Screen name="Settings" component={settings} />
        <Stack.Screen name="About" component={about} />
        <Stack.Screen name="Logout" component={logout} />
        <Stack.Screen name="productpage1" component={productpage1} />
        <Stack.Screen name="productpage2" component={productpage2} />
        <Stack.Screen name="productpage3" component={productpage3} />
        <Stack.Screen name="productpage4" component={productpage4} />
        <Stack.Screen name="productpage5" component={productpage5} />
        <Stack.Screen name="productpage6" component={productpage6} />
        <Stack.Screen name="productpage7" component={productpage7} />
        <Stack.Screen name="productpage8" component={productpage8} />
        <Stack.Screen name="cart" component={cart} />
        <Stack.Screen name="Payment" component={payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
