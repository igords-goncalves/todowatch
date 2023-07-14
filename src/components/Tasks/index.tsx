import styles from './Tasks.module.sass';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';
import Balancer from 'react-wrap-balancer';

interface TasksProps {
  time: string;
  task: string;
}

export const Tasks: React.FC<TasksProps> = ({ time, task }) => {
  return (
    <tbody className={styles['c-tasks__item']}>
      <tr>
        <td>
          <div>{time}</div>
        </td>
        <td>
          <div>
            <Balancer>{task}</Balancer>
          </div>
        </td>
        <td>
          <div className={styles['c-tasks__btn']}>
            <button onClick={() => console.log('edit')} aria-label="Botão">
              <img src={edit} alt="Botão editar" />
            </button>
            <button onClick={() => console.log('delete')} aria-label="Botão">
              <img src={trash} alt="Botão deletar" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
