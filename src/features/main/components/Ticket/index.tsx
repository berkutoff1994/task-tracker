//vendors
import cx from 'clsx';

//styles
import styles from './styles.module.scss';

export const Ticket = () => {
  return (
    <div className={styles.ticket}>
        <div className={styles.header}>
            <div className={cx(styles.name, styles.headerItem)}>
                Верстка домашней страницы
            </div>
            <div className={cx(styles.status, styles.headerItem)}>
                Статус: В работе
            </div>
        </div>
        <div className={styles.body}>
            <div className={cx(styles.client, styles.bodyItem)}>
                Клиент: ИП Курочкин
            </div>
            <div className={cx(styles.project, styles.bodyItem)}>
                Проект: Столыпино
            </div>
            <div className={cx(styles.description)}>
                Когда скромняга бард отдыхал от дел
                С Геральтом из Ривии он песню эту пел.
    
                Сразился Белый Волк с велиречивым чертом
                Эльфов покромсал несчетные когорты.
                
                Сзади подползли, хоть это стыд и срам
                Сломали мне лютню дали по зубам.
                
                Целился тот черт мне рогом прямо в глаз
                И тут Ведьмак крикнул «Вот твой смертный час!»
                
                Ведьмаку заплатите чеканной монетой, чеканной монетой,
                Ведьмаку заплатите – зачтется все это вам!
                
                Он хоть на край земли отправиться готов
                Сразить всех чудовищ у бить всех врагов
                
                Он эльфов всех прогнал за дальний перевал
                Высокие горы на вечный привал
            </div>
        </div>
    </div>
  )
}