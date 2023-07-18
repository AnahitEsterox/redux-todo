import {useSelector} from "react-redux";

import TodoItem from "./TodoItem.";

const TodoList = () => {
    const {todos} = useSelector((state) => state.todo)
    if(!todos.length) {
        return (
            <div className='empty-todo'>  ADD YOUR TO DOS</div>
        )
    }
    return (
        <ul>
            {todos.map((item) => {
                return (
                    <TodoItem value={item.value} key={item.id} id={item.id} isDone={item.isDone}/>
                )
            })}
        </ul>
    )
}

export default TodoList