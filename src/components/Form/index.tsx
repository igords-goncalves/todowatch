import styles from './Form.module.sass';
import { Button } from '../Button/index';
import { useState } from 'react';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';

interface FormProps {
  label?: string;
  placeHolder: string;
  children?: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ placeHolder }) => {
  const [label, setLabel] = useState(play);

  return (
    <>
      <form className={styles['c-form']}>
        <div className={styles['c-form__task']}>
          <label>Task</label>
          <input type="text" placeholder={placeHolder} />
        </div>
      </form>
      <Button
        label={label}
        onClick={() => (label === pause ? setLabel(play) : setLabel(pause))}
      />
    </>
  );
};
