import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const GoalInput = (props) => {
  const [goal, setGoal] = useState('');

  return (
    <View>
      <TextInput
        value={goal}
        autoFocus={true}
        style={styles.input}
        onChangeText={setGoal}
        placeholder="Course Goal"
      />

      <Button title="Add Goal" onPress={() => props.onAddGoal(goal, setGoal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    borderColor: 'dodgerblue',
  },
})

export default GoalInput;
