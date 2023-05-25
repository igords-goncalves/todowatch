import { Tasks } from '../Tasks';
import styles from './List.module.sass';

export const List: React.FC = () => {
  const tasks = [
    {
      time: '00:00:00',
      task: 'This is a task example',
    },
    {
      time: '00:10:00',
      task: 'This is a task example',
    },
  ];

  return (
    <div className={styles['c-list']}>
      <ul className={styles['c-list__list']}>
        {tasks.map((item, index) => (
          <Tasks key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};
