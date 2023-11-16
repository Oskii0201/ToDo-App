import {useState} from "react";
import styles from "./Form.module.css"
import {Button} from "../Button/Button.jsx";

export function Form({onFormSubmit}){
    const [inputValue, setInputValue] = useState("");

    return(
        <>
            <form
                className={styles.form}
                onSubmit={(e)=>{
                    e.preventDefault()
                    onFormSubmit(inputValue)
                    setInputValue("")
                }}
            >
                <input className={styles.input} type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                <Button disabled={inputValue === ""}>Dodaj</Button>
            </form>
        </>
    )

}