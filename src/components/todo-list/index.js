import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../TodoItem/TodoItem";


function TodoList() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);


    function deleteAll() {
    setTodos([]);
}
    return (
        <section> 
            <button onClick={deleteAll} className="btn btn-danger my-3">Delete All</button>
        <ul className="list-group"> 
            {todos.map(function (todo, index) {
               return <TodoItem todo={todo} index = {index}/>
                
            })}
        </ul>
        </section>
    );
}

export default TodoList;