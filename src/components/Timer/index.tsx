import styles from './Timer.module.sass';
import { useState, useEffect } from 'react';
import { insertZero } from './utils/insertZero';
import { handleTimer } from './utils/handleTimer';
import { startStopTimer } from './utils/startStopTimer';
import { Form } from '../Form';
import { List } from '../List';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import stop from '../../assets/stop.svg';
import { Button } from '../Button';
import { handleStopBtn } from './utils/handleStopBtn';

export const Timer: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [label, setLabel] = useState(play);
  //TODO: Pass hours, minutes and seconds to context or redux

  useEffect(
    () => startStopTimer({ setSeconds, setMinutes, setHours }, isRunning),
    [isRunning],
  );

  return (
    <header className={styles['c-header']}>
      <h1 className={styles['c-header__title']}>
        Tarefas <span lang="en">Timer</span>
      </h1>
      <div className={styles['c-timer']}>
        <span className={styles['c-timer__hours']}>{insertZero(hours)}</span>
        <span className={styles['c-timer__colon']}>:</span>
        <span className={styles['c-timer__minutes']}>
          {insertZero(minutes)}
        </span>
        <span className={styles['c-timer__colon']}>:</span>
        <span className={styles['c-timer__seconds']}>
          {insertZero(seconds)}
        </span>
      </div>
      <div className="c-card">
        <Form label="Tarefa" placeHolder="Digite sua tarefa." />
        <div className={styles['c-card__btn']}>
          <Button
            label={label}
            alt="Botão play e pause"
            onClick={() => {
              isRunning ? setLabel(play) : setLabel(pause);
              handleTimer(setIsRunning);
            }}
          />
          <Button
            label={stop}
            alt="Botão stop"
            onClick={() => {
              handleStopBtn({
                setIsRunning,
                setLabel,
                setSeconds,
                setMinutes,
                setHours,
                play,
              });
            }}
          />
        </div>
        <List />
      </div>
    </header>
  );
};
