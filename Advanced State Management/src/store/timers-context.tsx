import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Timer = {
  name: string;
  duration: number;
};

// contain context's props
type TimersState = {
  timers: Timer[];
  isRunning: boolean;
};

// contains all the context's methods
type TimersContextType = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
export const TimersContext = createContext<TimersContextType | null>(null);

// custom hook to check in one place if the context is null
export const useTimersContext = () => {
  const context = useContext(TimersContext);

  if (context === null) {
    throw new Error("TimersContext is null - that should not be the case!");
  }

  return context;
};

/** Provider */
type StartAction = {
  type: "START_TIMER";
};

type StopAction = {
  type: "STOP_TIMER";
};

type AddAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartAction | StopAction | AddAction;

const initialState: TimersState = {
  timers: [],
  isRunning: false,
};

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "ADD_TIMER":
        console.log("here: ", action.payload);
      return {
        ...state,
        timers: [
          ...state.timers,
          {
            name: action.payload.name,
            duration: action.payload.duration,
          },
        ],
      };

    case "START_TIMER":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMER":
      return {
        ...state,
        isRunning: false,
      };
    default:
      return state;
  }
}

export default function TimersContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextType = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer: (timerData: Timer) => {
        console.log("timers data: ", timerData);
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimer: () => {
      dispatch({ type: "START_TIMER" });
    },
    stopTimer: () => {
      dispatch({ type: "STOP_TIMER" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
