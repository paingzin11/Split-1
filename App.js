import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enterGoalText, setEnterGoalText] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  function goInputHandlar(enterText){
    setEnterGoalText(enterText);
  };

  function addGoalHandlar(){
    setCourseGoal((currentCourseGoal)=>[
      ...currentCourseGoal, 
      { text:enterGoalText, key: Math.random().toString()}]
      );
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goInputHandlar}/>
          <Button title='Add Goal' onPress={addGoalHandlar}/>
      </View>
      <View style={styles.goContainer}>
          <FlatList data={courseGoal} renderItem={(itemData)=> {
              return(
                // Edited Custom Component
                <GoalItem htext={itemData.item.text}/>
              );
          }}>
                
          </FlatList>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goContainer:{
    flex: 5,
  }
});
