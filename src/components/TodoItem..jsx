import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo, editTodo} from "../store/todo/todo.actions";

const TodoItem = ({value, id, isDone}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        if(!isDone) {
            return
        }
        dispatch(deleteTodo(id))
    }

    const handleToggle = () => {
        dispatch(toggleTodo(id))
    }

    const handleEdit = () => {
        dispatch(editTodo(id));
    }
    return (
        <li>
            <div>
                <input onChange={handleToggle} type="checkbox" checked={isDone} />
                <span className='checkbox' style={{textDecoration: isDone ? 'line-through': 'none'}}>{value}</span>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </li>
    )
}

export default TodoItem