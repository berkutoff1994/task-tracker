//components
import { Ticket } from "features/main/components/Ticket";

//styles
import styles from './styles.module.scss';

export const TicketsBlock = () => {
    return (
        <div className={styles.wrapper}>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    )
}