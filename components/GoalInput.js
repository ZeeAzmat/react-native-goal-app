import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, visible, closeModal }) => {
  const [goal, setGoal] = useState('');

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          value={goal}
          autoFocus={true}
          style={styles.input}
          onChangeText={setGoal}
          placeholder="Course Goal"
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={() => onAddGoal(goal, setGoal)} />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" color="tomato" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    borderColor: 'dodgerblue',
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  }
})

export default GoalInput;
