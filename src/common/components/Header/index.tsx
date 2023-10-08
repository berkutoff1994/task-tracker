import React from 'react'
import styles from './styles.module.scss';
import { Container } from 'layouts/Container';

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.header}>
                    <div className={styles.nav}>
                        <div className={styles.navItem}>
                            Главная страница
                        </div>
                        <div className={styles.navItem}>
                            Клиенты
                        </div>
                        <div className={styles.navItem}>
                            Проекты
                        </div>
                    </div>
                    <div className={styles.auth}>
                        Логин
                    </div>
                </div>
                
            </Container>
        </div>
        
    )
}