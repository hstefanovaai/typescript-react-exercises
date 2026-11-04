import { useState } from "react";

import CourseGoalsList, { type Goal } from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";
import goalImage from "./assets/goals.jpg";

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoalHandler = (goal: string, summary: string) => {
    const newGoal: Goal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const deleteGoalHandler = (goalIndex: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalIndex));
  };
  return (
    <main>
      <Header image={{ src: goalImage, alt: "Goal Image" }}>
        <h1>My Course Goals</h1>
      </Header>

      <NewGoal handleAddGoal={addGoalHandler} />

      <CourseGoalsList goals={goals} deleteGoal={deleteGoalHandler} />
    </main>
  );
}
