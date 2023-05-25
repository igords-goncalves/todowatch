import { countTimer } from './countTimer';

interface Numbers {
  setSeconds: (value: number | ((prevValue: number) => number)) => void;
  setMinutes: (value: number | ((prevValue: number) => number)) => void;
  setHours: (value: number | ((prevValue: number) => number)) => void;
}

export function startStopTimer(
  { setSeconds, setMinutes, setHours }: Numbers,
  isRunning: any,
) {
  let timer: NodeJS.Timeout | null = null;

  if (isRunning) {
    timer = setInterval(() => {
      countTimer({ setSeconds, setMinutes, setHours });
    }, 1000);
  }

  return () => {
    if (timer) {
      clearInterval(timer);
    }
  };
}
