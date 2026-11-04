import { type FormEvent, useRef } from "react";


type NewGoalProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};
export default function NewGoal({ handleAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // another way to extract data from the form, instead of two-way binding
    // const formData = new FormData(event.currentTarget);

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    handleAddGoal(enteredGoal, enteredSummary);

    // reset form fields after submission
    event.currentTarget.reset();
  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="goal">Goal:</label>
        <input id="goal" type="text" name="goal" ref={goalRef} />

        <label htmlFor="summary">summary:</label>
        <input id="summary" type="text" name="summary" ref={summaryRef} />

        <button type="submit">Add Goal</button>
      </form>
    </>
  );
}
