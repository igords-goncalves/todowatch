import styles from './Button.module.sass';

interface ButtonProps {
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles['c-button']} onClick={onClick}>
      <img src={label} />
    </button>
  );
};
