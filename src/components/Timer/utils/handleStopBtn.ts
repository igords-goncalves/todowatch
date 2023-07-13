interface StopBtnProps {
  setIsRunning: any;
  setLabel: any;
  setSeconds: any;
  setMinutes: any;
  setHours: any;
  play: any;
}
// TODO: Type correctly the elements

export const handleStopBtn = ({
  setIsRunning,
  setLabel,
  setSeconds,
  setMinutes,
  setHours,
  play,
}: StopBtnProps) => {
  setIsRunning(false);
  setLabel(play);
  setSeconds(0);
  setMinutes(0);
  setHours(0);
};
