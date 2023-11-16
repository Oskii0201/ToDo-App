import styles from "./ToDoItem.module.css"
import {Button} from "../Button/Button.jsx";

export function ToDoItem({name, done, onDeleteButtonClick, onDoneButtonClick}){
    return(
        <li className={styles.item}>
            <span className={`${styles.name} ${done ? styles.done : ""}`}>{name}</span>
            {!done && <Button onClick={onDoneButtonClick}>Odznacz</Button>}
            <Button onClick={onDeleteButtonClick}>Usuń</Button>
        </li>
    )
}