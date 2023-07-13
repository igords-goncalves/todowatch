import styles from './Form.module.sass';
interface FormProps {
  label?: string;
  placeHolder: string;
  children?: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ placeHolder, label }) => {
  return (
    <>
      <form className={styles['c-form']}>
        <div className={styles['c-form__task']}>
          <label>{label}</label>
          <input type="text" placeholder={placeHolder} />
        </div>
      </form>
    </>
  );
};
