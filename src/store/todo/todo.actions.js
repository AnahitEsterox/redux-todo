import {createAction} from "@reduxjs/toolkit";
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, CHANGE_TODO} from './todo.actionTypes';

export const addTodo = createAction(ADD_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const editTodo = createAction(EDIT_TODO);
export const changeTodo = createAction(CHANGE_TODO)

