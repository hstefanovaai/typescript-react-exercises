import Container from "./UI/Container.tsx";
import { useTimersContext, type Timer } from "../store/timers-context.tsx";
import { useState, useEffect, useRef } from "react";

export default function Timer(props: Timer) {
  const { name, duration } = props;
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const interval = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevState) => {
          if (prevState <= 0) {
            return prevState;
          }

          return prevState - 50;
        });
      }, 50);

      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    // clean up function!
    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>Duration: {duration} seconds</p>
      <progress max={duration * 1000} value={remainingTime} />
      <p>{formattedTime}</p>
    </Container>
  );
}
