import React from "react";
import {View, Text, StyleSheet} from 'react=native';


const [fontsLoaded] = useFonts({
    'Cheese-Burger': require('./assets/fonts/CheeseBurger.otf')
  });


export default function Header() {
    return (
<View style={styles.headingtext}>
<Text style={styles.sectionTitle}>Taskify</Text>
</View>

    )
}

const styles = StyleSheet.create({
    headingtext: {
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 3,
        backgroundColor: '#EFEFEF',
      },
      sectionTitle: {
        textAlign: 'center',
        color: '#55BCF6',
        fontSize: 50,
        fontWeight: '400',
        fontFamily: 'Cheese-Burger',
      },
})
