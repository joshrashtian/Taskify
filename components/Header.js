import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
<View style={styles.sectionTitle}>
    <Text style={styles.headingtext}>Taskify</Text>
</View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        height: 100,
        backgroundColor: '#1ecbe1',
        paddingTop: 25,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomColor: '#479cb8',
        borderBottomWidth: 3,
        borderCurve: 'continuous',
        justifyContent: 'space-around',
      },
      headingtext: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 40,
        fontWeight: '400',
        fontStyle: 'italic',
        textShadowColor: '#000',
        textShadowRadius: 1,
      }
    })