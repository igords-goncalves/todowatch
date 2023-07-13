import { Tasks } from '../Tasks';
import styles from './List.module.sass';

export const List: React.FC = () => {
  const tasks = [
    {
      time: '00:00:00',
      task: 'Estudar design e ui/ux',
    },
    {
      time: '00:10:00',
      task: 'Terminar os projetos',
    },
  ];

  return (
    <div className={styles['c-list']}>
      <ul className={styles['c-list__list']}>
        {/* TODO: Use a table instead a list */}
        {tasks.map((item, index) => (
          <Tasks key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};
