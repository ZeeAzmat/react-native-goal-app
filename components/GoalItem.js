import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.value}</Text>
    </View>
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
