import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

export type Goal = {
  id: number;
  title: string;
  description: string;
};

type CourseGoalsListProps = {
  goals: Goal[];
  deleteGoal: (id: number) => void;
};

export default function CourseGoalsList({
  goals,
  deleteGoal,
}: CourseGoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>Enter your goal and summary below.</p>
      </InfoBox>
    );
  }

  let warningMessage = null;

  if (goals.length > 3) {
    warningMessage = (
      <InfoBox mode="warning">
        <p>You have more than 3 goals. Consider prioritizing them.</p>
      </InfoBox>
    );
  }
  return (
    <>
      {warningMessage}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} deleteGoal={deleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
