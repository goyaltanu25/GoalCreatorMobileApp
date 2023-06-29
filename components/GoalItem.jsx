import { Pressable, Text, StyleSheet,View } from "react-native";

export const GoalItem = (props) => {
  const { goal, deleteGoal } = props;

  return (
    <View style={styles.goalItem}>
    <Pressable style={styles.pressedItem} onPress={() => deleteGoal(goal.item.id)} >
      <Text style={styles.goalText}>{goal.item.title}</Text>
    </Pressable>
    </View>

  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

