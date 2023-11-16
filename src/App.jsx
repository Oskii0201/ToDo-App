import {useState} from "react";
import {Form} from "./components/Form/Form.jsx";
import {ToDoItem} from "./components/ToDoItem/ToDoItem.jsx";
import {getSubheading} from "./utils/getSubheading.js";
import styles from "./App.module.css";

const ToDos = [
    {
        id: 1,
        name:"Zapłacić rachunki",
        done: false
    },
    {
        id: 2,
        name:"Posprzątać pokój",
        done: false
    }
]

function App() {
    const [formIsShown, setFormIsShown] = useState(false)
    const [toDos, setToDos] = useState(ToDos);

    function addNewToDo(name){
        setToDos((prevState) => {
            return ([...prevState, {id: toDos.at(-1).id +1, name: name, done:false }])
        })
    }
    function deleteTodo(id){
        setToDos((prevToDos) =>
            prevToDos.filter((todo) => todo.id !==id)
        );
    }
    function finishTodo(id){
        setToDos((prevToDos) => prevToDos.map((todo)=>{
            if(todo.id !==id){
                return todo;
            }else{
                return {
                    ...todo,
                    done: true,
                }
            }
        }));
    }

  return (
    <>
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1>Do zrobienia</h1>
                    <h3>{getSubheading(toDos.length)}</h3>
                </div>
                {!formIsShown && <button className={styles.button} onClick={()=>setFormIsShown(true)}>+</button>}

            </header>

            {formIsShown &&
                <Form onFormSubmit={(newToDoName)=> {
                    addNewToDo(newToDoName)
                    setFormIsShown(false)
                }}/>
            }
            <ul id="toDoList">
                {toDos.map(({id, name, done}) =>(
                    <ToDoItem
                        key={id}
                        name={name}
                        done={done}
                        onDeleteButtonClick={()=>deleteTodo(id)}
                        onDoneButtonClick={()=>finishTodo(id)}
                    />
                ))}
            </ul>
        </div>
    </>
  )
}

export default App
