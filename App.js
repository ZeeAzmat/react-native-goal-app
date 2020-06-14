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
  const [goalList, setGoalList] = useState([]);

  const goalListHandler = () => {
    setGoal('');
    setGoalList(goalList => [...goalList, { key: Math.random().toString(), value: goal }])
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          value={goal}
          autoFocus={true}
          style={styles.input}
          onChangeText={setGoal}
          placeholder="Course Goal"
        />

        <Button title="Add Goal" onPress={goalListHandler} />
      </View>

      <FlatList
        data={goalList}
        style={styles.list}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <Item title={item.value} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 14,
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
  list: {
    marginVertical: 10,
  },
  item: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: 'teal',
  }
});
