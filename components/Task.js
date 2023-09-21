import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.circle}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      circle: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 3,
        borderRadius: 5,
        marginRight: 10,
      },
      itemText: {
        maxWidth: '80%',
      },

});

export default Task;
