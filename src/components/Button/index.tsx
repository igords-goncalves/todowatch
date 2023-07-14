import styles from './Button.module.sass';

interface ButtonProps {
  label: string;
  alt: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, alt }) => {
  return (
    <button className={styles['c-button']} onClick={onClick} aria-label="Botão">
      <img src={label} alt={alt} />
    </button>
  );
};
