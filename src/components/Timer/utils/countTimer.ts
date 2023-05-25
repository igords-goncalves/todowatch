interface Numbers {
  setSeconds: (value: number | ((prevValue: number) => number)) => void;
  setMinutes: (value: number | ((prevValue: number) => number)) => void;
  setHours: (value: number | ((prevValue: number) => number)) => void;
}

export function countTimer({ setSeconds, setMinutes, setHours }: Numbers) {
  setSeconds((prevSeconds: number) => {
    if (prevSeconds === 59) {
      setMinutes((prevMinutes: number) => {
        if (prevMinutes === 59) {
          setHours((prevHours: number) => prevHours + 1);
          return 0;
        }
        return prevMinutes + 1;
      });
      return 0;
    }
    return prevSeconds + 1;
  });
}
