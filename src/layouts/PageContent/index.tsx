//vendors
import { FC } from 'react';

//styles
import styles from './styles.module.scss';

interface PageContentProps {
    children: React.ReactNode;
}

export const PageContent:FC<PageContentProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}