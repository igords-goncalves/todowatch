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
    <div className={styles['c-table']}>
      <table className={styles['c-table__list']}>
        <thead className={styles['c-table__head']}>
          <tr>
            <th>
              <span lang="en">Timer</span>
            </th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        {tasks.map((item, index) => (
          <Tasks key={index} {...item} />
        ))}
      </table>
    </div>
  );
};
