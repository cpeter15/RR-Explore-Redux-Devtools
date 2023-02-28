import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: []
}

export const todoSlice = ({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {

        },
        removeTodo: (state, action) => {

        },
        clearTodo: () => {
            return { items: [] }
        }
    }
})

export const { addTodo, removeTodo, clearTodo } = todoSlice.actions

export default todoSlice.reducer
