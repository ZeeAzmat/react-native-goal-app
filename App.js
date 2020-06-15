import Constants from 'expo-constants';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button } from 'react-native';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isGoalModal, setIsGoalModal] = useState(false);

  const goalListHandler = (goal = goal.trim(), setGoal) => {
    setGoal('');

    if (goal) {
      setGoalList(goalList => [...goalList, { key: Math.random().toString(), value: goal }])
    }
  };

  const closeModal = () => {
    setIsGoalModal(false);
  }

  const deleteItem = (goal) => {
    setGoalList(currentList => {
      return currentList.filter(item => item.key !== goal.key);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsGoalModal(true)} />
      <GoalInput visible={isGoalModal} closeModal={closeModal} onAddGoal={goalListHandler} />

      <FlatList
        data={goalList}
        style={styles.list}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <GoalItem deleteItem={deleteItem} item={item} />}
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
  list: {
    marginVertical: 10,
  },
});
