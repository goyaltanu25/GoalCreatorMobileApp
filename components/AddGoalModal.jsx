import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export const AddGoalModal = ({ visible, onCancel, addGoal }) => {
  const [goal, setGoal] = useState("");

  const addGoalHandler = () => {
    addGoal(goal);
    setGoal("");
  };

  const cancleHandler = () => {
    onCancel();
    setGoal("");
  };
  return (
    <Modal visible={visible}>
      <View style={styles.addGoalContainer}>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Add a Goal"
            value={goal}
            onChangeText={(text) => setGoal(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Add Goal" onPress={addGoalHandler} />
          <Button style={styles.button} title="Cancel Goal" onPress={cancleHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addGoalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
