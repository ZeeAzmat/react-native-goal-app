import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalList, setGoalList] = useState([
    {
      key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      value: 'First Item',
    },
    {
      key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      value: 'Second Item',
    },
    {
      key: '58694a0f-3da1-471f-bd96-145571e29d72',
      value: 'Third Item',
    }
  ]);

  const goalListHandler = () => {
    // setGoalList(goalList => [...goalList, goal])
    setGoalList(goalList => [...goalList, { key: Math.random().toString(), value: goal }])
    // console.log('\n\ngoalList: ', JSON.stringify(goalList));
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={setGoal} value={goal} />
        <Button title="Add Goal" onPress={goalListHandler} />
      </View>

      <FlatList
        data={goalList}
        renderItem={({ item }) => <Item title={item.value} />}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    margin: 8,
    padding: 10,
    backgroundColor: 'teal',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  input: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    borderColor: 'dodgerblue',
  },
  listItem: {
    margin: 5,
    padding: 10,
    backgroundColor: 'dodgerblue',
    // borderColor: ''
  }
});
