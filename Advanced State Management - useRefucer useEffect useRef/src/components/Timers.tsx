import { useTimersContext } from "../store/timers-context.tsx";
import Timer from "./Timer.tsx";

export default function Timers() {
  const timersCtx = useTimersContext();

  return (
    <ul>
      {timersCtx.timers.map((timer) => (
        <li key={timer.name}>
          <Timer name={timer.name} duration={timer.duration} />
        </li>
      ))}
    </ul>
  );
}
