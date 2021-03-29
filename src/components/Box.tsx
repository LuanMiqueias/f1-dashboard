import { ReactNode } from "react";
import styles from "../styles/components/Box.module.css";

interface Props {
  title: string;
  description?: string;
}

const Box: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className={styles.box}>
      <div className={styles.title_box}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default Box;
