import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

    name: "todos",
    initialState: {

        allTodos: [],

        // [{ id: 1, text: "something Here" }],

        edit: {
            todo: {},
            isEdit: false,
        },


    },

    reducers: {

        // delete

        remove: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.filter((item) => item.id !== action.payload)
            }
        },

        // add (save)

        add: (state, action) => {

            return {
                ...state,
                allTodos: [action.payload, ...state.allTodos],
            };
        },

        // Edit

        edit: (state, action) => {

            return {
                ...state,
                edit: { todo: action.payload, isEdit: true },

            };
        },

        // update

        update: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.map(item => item.id === action.payload.id ? action.payload : item),
                edit: { todo: {}, isEdit: false }
            }

        },
    }
});

export const { remove, add, edit, update } = todoSlice.actions;

export default todoSlice.reducer;