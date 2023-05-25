import styles from './Timer.module.sass';
import { useState, useEffect } from 'react';
import { insertZero } from './utils/insertZero';
import { handleTimer } from './utils/handleTimer';
import { startStopTimer } from './utils/startStopTimer';
import { Form } from '../Form';
import { List } from '../List';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import { Button } from '../Button';

export const Timer: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [label, setLabel] = useState(play);

  useEffect(
    () => startStopTimer({ setSeconds, setMinutes, setHours }, isRunning),
    [isRunning],
  );

  return (
    <>
      <div className={styles['c-timer']}>
        <span className={styles['c-timer__hours']}>{insertZero(hours)}:</span>
        <span className={styles['c-timer__minutes']}>
          {insertZero(minutes)}:
        </span>
        <span className={styles['c-timer__seconds']}>
          {insertZero(seconds)}
        </span>
      </div>
      <div className="card">
        <Form label="Task" placeHolder="Enter your task here ..." />
        <Button
          label={label}
          onClick={() => {
            isRunning ? setLabel(play) : setLabel(pause);
            handleTimer(setIsRunning);
          }}
        />
        <List />
      </div>
    </>
  );
};
