
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import Header from './components/Header'
import React, {useState} from 'react';
import { useFonts } from 'expo-font';

export default function App() {
{/* Set Up Some Simples */}

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
        <View style={styles.items}>
        <Header />
          {/* Where Tasks Will Go */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>


  <KeyboardAvoidingView behavior ={Platform.OS === "ios" ? "padding" : "height"} style = {styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={'Type tasks...'} value={task} onChangeText={text => setTask(text)} />

    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style ={styles.addButton}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  items: {
    marginTop: 30,
  },
writeTaskWrapper: {
  position: 'absolute', 
  bottom: '10%',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#E3E3E3',
  borderWidth: 0.5,
  width: '75%',
  marginLeft: 5,
},
addButton: {
  width: 60,
  height: 60,
  backgroundColor: '#B3DBE6',
  borderRadius: 75,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 5,
},
addText: {
  fontSize: 30,
},

});
