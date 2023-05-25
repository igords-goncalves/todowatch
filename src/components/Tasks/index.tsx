import styles from './Tasks.module.sass';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

interface TasksProps {
  time: string;
  task: string;
}

export const Tasks: React.FC<TasksProps> = ({ time, task }) => {
  return (
    <li className={styles['c-tasks__item']}>
      <div>{time}</div> <div>{task}</div>
      <div className={styles['c-tasks__btn']}>
        <button onClick={() => console.log('edit')}>
          <img src={edit} />
        </button>
        <button onClick={() => console.log('delete')}>
          <img src={trash} />
        </button>
      </div>
    </li>
  );
};
