import styles from './Timer.module.sass';

interface TimerProps {
  hours: string;
  minutes: string;
  seconds: string;
}

export const Timer: React.FC<TimerProps> = ({ hours, minutes, seconds }) => {
  return (
    <div className={styles['c-timer']}>
      <span className={styles['c-timer__hours']}>{hours}:</span>
      <span className={styles['c-timer__minutes']}>{minutes}:</span>
      <span className={styles['c-timer__seconds']}>{seconds}</span>
    </div>
  );
};
