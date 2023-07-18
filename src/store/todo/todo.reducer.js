import {createReducer} from "@reduxjs/toolkit";
import { addTodo, deleteTodo, toggleTodo, editTodo, changeTodo } from './todo.actions';

const initialState = {
    todos: [],
    entry: null,
};

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        })
        .addCase(deleteTodo, (state, action) => {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload);

            return {
                ...state,
                todos: newTodos,
            }
        })
        .addCase(toggleTodo, (state, action) => {
            state.todos.forEach((todo) => {
                if(todo.id === action.payload) {
                    todo.isDone = !todo.isDone;
                }
            })
        })
        .addCase(editTodo, (state, action) => {
            state.entry = state.todos.find((todo) => todo.id === action.payload);
        })
        .addCase(changeTodo, (state, action) => {
            state.entry.value = action.payload
            const newTodos = state.todos.map((todo) => {
                if(todo.id === state.entry.id) {
                    return state.entry
                }
                return todo;
            })
            state.todos = newTodos
            state.entry = null;
        })
    .addDefaultCase((state) => state);
})

export default todoReducer;