import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default function About() {
    return (
        <View style={styles.container}>
            <Text>About Us</Text>
            <Text>Insert Picture and brief description</Text>
            <Text> Including Contact</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



