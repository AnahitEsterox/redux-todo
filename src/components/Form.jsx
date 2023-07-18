import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, changeTodo} from "../store/todo/todo.actions";
import {nanoid} from "nanoid";

const Form = () => {
    const dispatch = useDispatch();
    const {entry} = useSelector((state) => state.todo);

    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(entry) {
            dispatch(changeTodo(value));
            setValue('');
            return;
        }

        const todoItem = {
            id: nanoid(),
            value,
            isDone: false,
        }
        dispatch(addTodo(todoItem));

        setValue('')
    }

    useEffect(() => {
        if(entry) {
            setValue(entry.value)
        }
    }, entry)

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
            <button>{entry ? 'edit' : 'add'}</button>
        </form>
    )
}

export default Form