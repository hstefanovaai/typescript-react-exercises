import Container from "./UI/Container.tsx";
import { type Timer } from "../store/timers-context.tsx";
import { useState, useEffect, useRef } from "react";

export default function Timer(props: Timer) {
  const { name, duration } = props;
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const interval = useRef<number | null>(null);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevState) => prevState - 50);
    }, 50);

    interval.current = timer;
    // clean up function!
    return () => clearInterval(timer);
  }, []);

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
