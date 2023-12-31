import { FC } from 'react';
import styles from './styles.module.scss';

interface ContainerProps {
    children: React.ReactNode;
}

export const Container:FC<ContainerProps> = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}