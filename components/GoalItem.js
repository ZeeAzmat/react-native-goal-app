import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => deleteItem(item)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'white',
  },
  item: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: 'teal',
  },
})

export default GoalItem;
