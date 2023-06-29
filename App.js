import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { GoalItem } from "./Goals/GoalItem";
import { AddGoalModal } from "./Goals/AddGoalModal";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    const newGoal = {
      id: Math.random(),
      title: goal,
    };
    setShowModal(!showModal);
    setGoals([...goals, newGoal]);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((currGoals) => currGoals.filter((goal) => goal.id !== goalId));
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={showModalHandler}
        />
        <AddGoalModal
          visible={showModal}
          onCancel={onCloseHandler}
          addGoal={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(item) => {
              return <GoalItem goal={item} deleteGoal={deleteGoalHandler} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
